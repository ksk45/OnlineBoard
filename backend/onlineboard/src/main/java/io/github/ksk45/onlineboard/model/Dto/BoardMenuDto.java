package io.github.ksk45.onlineboard.Model.Dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BoardMenuDto {

  private String boardUuid;
  private String boardName;
  private String boardDesc;
  private Integer boardOwnerId;
  private Integer collaboratorNum;

}