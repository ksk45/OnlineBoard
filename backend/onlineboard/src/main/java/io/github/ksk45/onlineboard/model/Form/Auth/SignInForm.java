package io.github.ksk45.onlineboard.Model.Form.Auth;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class SignInForm {
  
  @NotBlank(message = "{VALIDATION_REQUIRED}")

  private String email;

  @NotBlank(message = "{VALIDATION_REQUIRED}")
  private String password;
}
