// src/main/java/io/github/ksk45/onlineboard/Config/SecurityConfig.java
package io.github.ksk45.onlineboard.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    // Spring Securityにより、自動でlogin画面へリダイレクトするのを無効化
    http
      .authorizeHttpRequests(auth -> auth
        .anyRequest().permitAll() // 全リクエストを許可
      )
      .csrf(csrf -> csrf.disable()); // CSRF無効化（開発中のみ）

    return http.build();
  }
}
