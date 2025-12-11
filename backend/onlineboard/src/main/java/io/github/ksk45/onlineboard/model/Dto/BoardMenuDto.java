package io.github.ksk45.onlineboard.Model.Dto;

import java.sql.Timestamp;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BoardMenuDto {

  private String boardUuid;
  private String boardName;
  private Integer boardOwnerId;
  private Timestamp boardCreatedAt; // nativesqlで取得のため、LocalDateTimeではなくTimestamp
  private Timestamp boardUpdatedAt; // nativesqlで取得のため、LocalDateTimeではなくTimestamp
  private Long memberCount;

}