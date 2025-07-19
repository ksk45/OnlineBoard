package io.github.ksk45.onlineboard.Config;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import lombok.extern.slf4j.Slf4j;

@ControllerAdvice
@Slf4j
public class GlobalExceptionConfig {
  
  // Formに定義したバリデーションエラー(MethodArgumentNotValidException)を検知した際に通過
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<ProblemDetail> handleValidationExceptions(MethodArgumentNotValidException ex, WebRequest request) {
    Map<String, String> fieldErrors = new HashMap<>();
    ex.getBindingResult().getFieldErrors().forEach( error -> {
      // エラーの発生フィールド名取得
      String fieldName = error.getField();
      String errorMessage = error.getDefaultMessage();

      log.info("ValidationError field:" + fieldName + " message:" + errorMessage);
      fieldErrors.put(fieldName, errorMessage);
    });

    // フロントエンドへ返すエラー情報を作成
    ProblemDetail problemDetail = ProblemDetail.forStatus(HttpStatus.BAD_REQUEST);
    
    if (!ObjectUtils.isEmpty(fieldErrors)) {
      problemDetail.setProperty("fieldErrors", fieldErrors);
    }

    return new ResponseEntity<>(problemDetail, HttpStatus.BAD_REQUEST);
  }
}
