package io.github.ksk45.onlineboard.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("auth")
public class AuthController {
  
  @PostMapping("/sign-up")
  public String signUp() {
    log.info("サインアップapi呼び出し成功");
    return null;
  }
}
