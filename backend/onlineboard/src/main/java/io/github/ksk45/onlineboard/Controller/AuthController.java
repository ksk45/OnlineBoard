package io.github.ksk45.onlineboard.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.ksk45.onlineboard.Service.Auth.AuthService;
import io.github.ksk45.onlineboard.model.Form.Auth.SignUpForm;
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
  public String signUp(@Valid @RequestBody SignUpForm signUpForm) {
    log.info("サインアップapi呼び出し成功");
    
    authService.isEmailExsists(signUpForm.getEmail());

    return null;
  }
}
