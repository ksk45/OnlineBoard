package io.github.ksk45.onlineboard.Model.Form.Board;

import io.github.ksk45.onlineboard.Model.Form.Common.UserContext;
import io.github.ksk45.onlineboard.Validation.ValidUserContext;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class BoardCreateForm {
  
  @NotBlank(message = "{VALIDATION_REQUIRED}")
  @Size(max = 50, message = "{VALIDATION_MAX_LENGTH}")
  private String wbName;

  @Size(max = 200, message = "{VALIDATION_MAX_LENGTH}")
  private String wbDesc;

  @ValidUserContext(message = "{VALIDATION_USER_CONTEXT_INVALID}") 
  private UserContext userContext;
}
