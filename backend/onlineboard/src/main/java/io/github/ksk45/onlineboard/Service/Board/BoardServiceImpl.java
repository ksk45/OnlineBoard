package io.github.ksk45.onlineboard.Service.Board;

import java.util.UUID;

import org.springframework.stereotype.Service;

import io.github.ksk45.onlineboard.Model.Entity.Board;
import io.github.ksk45.onlineboard.Model.Entity.BoardMember;
import io.github.ksk45.onlineboard.Model.Entity.BoardMemberId;
import io.github.ksk45.onlineboard.Model.Form.Board.BoardCreateForm;
import io.github.ksk45.onlineboard.Model.Response.BoardResponseDto;
import io.github.ksk45.onlineboard.Repository.BoardMemberRepository;
import io.github.ksk45.onlineboard.Repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardServiceImpl implements BoardService {

  private final BoardRepository boardRepository;
  private final BoardMemberRepository boardMemberRepository;

  @Override
  public Board boardCreate(BoardCreateForm boardCreateForm) {

    Board boardEntity =  Board.builder()
        .boardUuid(UUID.randomUUID().toString())
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
                          .boardUuid(board.getBoardUuid())
                          .boardName(board.getBoardName())
                          .boardDesc(board.getBoardDesc())
                          .boardOwnerId(board.getBoardOwnerId())
                          .build();
  }

  @Override
  public void boardMemberCreate(Integer boardId, Integer userId) {
    BoardMember boardMemberEntity = BoardMember.builder()
        .boardMember(BoardMemberId.builder()
            .boardId(boardId)
            .userId(userId)
            .build()
        )
        .build();
    boardMemberRepository.save(boardMemberEntity);
  }
}
