package io.github.ksk45.onlineboard.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RequiredArgsConstructor
@Slf4j
@RestController
public class MainController {
  @GetMapping("/")
  public String hello() {
    log.info("hello world");
    return "Hello, World!";
  }
}
