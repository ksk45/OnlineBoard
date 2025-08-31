package io.github.ksk45.onlineboard.Service.Board;

import org.springframework.stereotype.Service;

import io.github.ksk45.onlineboard.Model.Entity.Board;
import io.github.ksk45.onlineboard.Model.Form.Board.BoardCreateForm;
import io.github.ksk45.onlineboard.Model.Response.BoardResponseDto;
import io.github.ksk45.onlineboard.Repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardServiceImpl implements BoardService {

  private final BoardRepository boardRepository;

  @Override
  public Board boardCreate(BoardCreateForm boardCreateForm) {

    Board boardEntity =  Board.builder()
        .boardName(boardCreateForm.getWbName())
        .boardDesc(boardCreateForm.getWbDesc())
        .boardOwnerId(boardCreateForm.getUserContext().getUserId())
        .build();
    
    // boardテーブルへのinsert sql発行
    return boardRepository.save(boardEntity);
  }
  
  @Override
  public BoardResponseDto createBoardResponseDto(Board board) {
    return BoardResponseDto.builder()
                          .boardId(board.getBoardId())
                          .boardName(board.getBoardName())
                          .boardDesc(board.getBoardDesc())
                          .boardOwnerId(board.getBoardOwnerId())
                          .build();
  }
}
