package io.github.ksk45.onlineboard.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import io.github.ksk45.onlineboard.Model.Entity.User;
import io.github.ksk45.onlineboard.Model.Form.Auth.SignUpForm;
import io.github.ksk45.onlineboard.Model.Response.AuthResponseDto;
import io.github.ksk45.onlineboard.Service.Auth.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("auth")
public class AuthController {
  
  private final AuthService authService;

  @PostMapping("/sign-up")
  public ResponseEntity<AuthResponseDto> signUp(@Valid @RequestBody SignUpForm signUpForm) {
    log.info("サインアップapi呼び出し成功");
    
    // メールアドレス存在チェック
    authService.isEmailExsists(signUpForm.getEmail());

    // ユーザー登録
    User user = authService.regUser(signUpForm);

    AuthResponseDto responseDto = AuthResponseDto.builder()
                                  .userId(user.getUserId())
                                  .userName(user.getUserName())
                                  .email(user.getEmail())
                                  .build();

    return new ResponseEntity<AuthResponseDto>(responseDto, HttpStatus.CREATED);
  }
}
