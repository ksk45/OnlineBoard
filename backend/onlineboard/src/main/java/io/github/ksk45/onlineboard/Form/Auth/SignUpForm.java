package io.github.ksk45.onlineboard.Form.Auth;

import io.github.ksk45.onlineboard.Validation.PasswordMatches;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@PasswordMatches
public class SignUpForm {

  @NotBlank(message = "{VALIDATION_REQUIRED}")
  @Size(max = 100, message = "{VALIDATION_MAX_LENGTH}")
  private String name;

  @NotBlank(message = "{VALIDATION_REQUIRED}")
  @Size(max = 100, message = "{VALIDATION_MAX_LENGTH}")
  @Email(message = "{VALIDATION_EMAIL_FORMAT}")
  private String email;

  @NotBlank(message = "{VALIDATION_REQUIRED}")
  @Size(min = 8, message = "{VALIDATION_MIN_LENGTH}")
  @Size(max = 64, message = "{VALIDATION_MAX_LENGTH}")
  @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d]*$", message = "{VALIDATION_PASSWORD_COMPLEXITY}")
  private String passNew;
  
  @NotBlank(message = "{VALIDATION_REQUIRED}")
  @Size(min = 8, message = "{VALIDATION_MIN_LENGTH}")
  @Size(max = 64, message = "{VALIDATION_MAX_LENGTH}")
  @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d]*$", message = "{VALIDATION_PASSWORD_COMPLEXITY}")
  private String passConf;
}
