package io.github.ksk45.onlineboard.Config;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.lang.NonNull;
import org.springframework.validation.Validator;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
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

  // バリデーションエラーメッセージに.propertiesの変数を使用させる
  @Override
  public Validator getValidator() {
    LocalValidatorFactoryBean validator = new LocalValidatorFactoryBean();
    validator.setValidationMessageSource(messageSource());
    return validator;
  }

  @Bean
  public MessageSource messageSource() {
    ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
    // 複数のベースネームを設定
    messageSource.setBasenames("classpath:ValidationMessages", "classpath:ErrorMessages", "classpath:Messages");
    messageSource.setDefaultEncoding("UTF-8");
    messageSource.setCacheSeconds(5); /** TODO: 開発完了時、削除（開発中のHMR有効化のため） */
    return messageSource;
  }
}
