package io.github.ksk45.onlineboard.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
  @Override
  public void addCorsMappings(@NonNull CorsRegistry registry) {
    registry.addMapping("/api/**")
            .allowedOrigins("http://localhost:5173")
            .allowedMethods("GET", "POST")
            // Cookieを有効にする場合、以下を追加
            // .allowCredentials(true);
            ;
  }
}
