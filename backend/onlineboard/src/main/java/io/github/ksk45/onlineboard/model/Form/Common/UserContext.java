package io.github.ksk45.onlineboard.Model.Form.Common;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserContext {
  
  private Integer userId;
  private String userName;
  private String email;
  
}
