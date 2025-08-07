package io.github.ksk45.onlineboard.Exception.Auth;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class UserNotExistsException extends RuntimeException {
  
  public UserNotExistsException(String message) {
    super(message);
  }
}
