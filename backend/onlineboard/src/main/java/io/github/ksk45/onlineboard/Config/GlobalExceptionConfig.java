package io.github.ksk45.onlineboard.Config;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import io.github.ksk45.onlineboard.Exception.Auth.EmailAlreadyRegisteredException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@ControllerAdvice
@RequiredArgsConstructor
@Slf4j
public class GlobalExceptionConfig {

  private final MessageSource messageSource;

  // Formに定義したバリデーションエラー(MethodArgumentNotValidException)を検知した際に通過
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<ProblemDetail> handleValidationExceptions(MethodArgumentNotValidException ex,
      WebRequest request) {

    // エラーメッセージ表示の優先順位を設定（同時に複数バリデーション検知用）
    final Map<String, Integer> ERROR_PRIORITIES = Map.of(
        "NotBlank", 1,
        "Size", 2,
        "Length", 3,
        "Pattern", 4);

    Map<String, String> fieldErrors = new HashMap<>();
    Map<String, Integer> fieldPriority = new HashMap<>();
    ex.getBindingResult().getFieldErrors().forEach(error -> {
      // エラーの発生フィールド名取得
      String fieldName = error.getField();
      // エラーメッセージをValidationMessages.propertiesから再構築
      String errorMessage = messageSource.getMessage(error, request.getLocale());
      // 現在のエラー種別を取得
      String errorCode = error.getCode();

      int errorPriority = ERROR_PRIORITIES.containsKey(errorCode) ? ERROR_PRIORITIES.get(errorCode) : 0;

      if (!fieldPriority.containsKey(fieldName) ||
          (errorPriority != 0 &&
          fieldPriority.containsKey(fieldName) && fieldPriority.get(fieldName) > errorPriority)) {
        // if (errorPriority != 0) {
        fieldErrors.put(fieldName, errorMessage);
        fieldPriority.put(fieldName, errorPriority);
        log.info("ValidationError field:" + fieldName + " message:" + errorMessage);
        // }
      }

    });

    // フロントエンドへ返すエラー情報を作成
    ProblemDetail problemDetail = ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);

    if (!ObjectUtils.isEmpty(fieldErrors)) {
      problemDetail.setProperty("fieldErrors", fieldErrors);
    }

    return new ResponseEntity<>(problemDetail, HttpStatus.BAD_REQUEST);
  }

  // サインアップ時、メールアドレス存在エラー発生後処理
  @ExceptionHandler(EmailAlreadyRegisteredException.class)
  public ResponseEntity<ProblemDetail> handleEmailAlreadyRegisterException(EmailAlreadyRegisteredException ex,
      WebRequest request) {
    Map<String, String> fieldErrors = new HashMap<>();

    // propertiesファイルからエラーメッセージを取得
    String errorMessage = messageSource.getMessage(ex.getMessage(), null, request.getLocale());

    log.info("ValidationError field: email" + " message:" + errorMessage);
    fieldErrors.put("email", errorMessage);

    ProblemDetail problemDetail = ProblemDetail.forStatus(HttpStatus.CONFLICT);
    if (!ObjectUtils.isEmpty(fieldErrors)) {
      problemDetail.setProperty("fieldErrors", fieldErrors);
    }

    return new ResponseEntity<>(problemDetail, HttpStatus.CONFLICT);
  }
}
