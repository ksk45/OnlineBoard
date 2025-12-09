package io.github.ksk45.onlineboard.Model.Response;

import java.util.List;

import io.github.ksk45.onlineboard.Model.Dto.BoardMenuDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
public class MenuResponseDto {
  
  private List<BoardMenuDto> boardList;

}