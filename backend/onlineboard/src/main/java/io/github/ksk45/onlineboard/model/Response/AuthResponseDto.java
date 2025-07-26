package io.github.ksk45.onlineboard.Model.Response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthResponseDto {
  
  private Integer userId;
  private String userName;
  private String email;

}
