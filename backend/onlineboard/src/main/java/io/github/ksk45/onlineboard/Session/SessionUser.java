package io.github.ksk45.onlineboard.Session;

import java.time.LocalDateTime;

import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

import lombok.Data;

@Component
@SessionScope
@Data
public class SessionUser {
  
  private Integer userId;
  private String userName;
  private String userEmail;
  private LocalDateTime loginTime;
  private LocalDateTime accessTime;

}
