package io.github.ksk45.onlineboard.Model.Form.Board;

import io.github.ksk45.onlineboard.Model.Form.Common.UserContext;
import lombok.Data;

@Data
public class BoardCreateForm {
  
  private String wbName;

  private String wbDesc;

  private UserContext userContext;
}
