package io.github.ksk45.onlineboard.Model.Response;

import java.util.List;

import io.github.ksk45.onlineboard.Model.Dto.BoardDto;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MenuResponseDto {
  
  private List<BoardDto> boardList;

}