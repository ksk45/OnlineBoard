package io.github.ksk45.onlineboard.Model.Dto;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BoardMenuDto {

  private String boardUuid;
  private String boardName;
  private Integer boardOwnerId;
  private LocalDateTime boardCreatedAt;
  private Integer memberCount;

}