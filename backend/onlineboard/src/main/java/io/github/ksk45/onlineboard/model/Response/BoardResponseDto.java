package io.github.ksk45.onlineboard.Model.Response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BoardResponseDto {
  
  private Integer boardId;
  private String boardName;
  private String boardDesc;
  private Integer boardOwnerId;

}