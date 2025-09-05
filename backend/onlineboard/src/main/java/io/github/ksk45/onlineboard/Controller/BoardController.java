package io.github.ksk45.onlineboard.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.ksk45.onlineboard.Model.Entity.Board;
import io.github.ksk45.onlineboard.Model.Form.Board.BoardCreateForm;
import io.github.ksk45.onlineboard.Model.Response.BoardResponseDto;
import io.github.ksk45.onlineboard.Service.Board.BoardService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("board")
public class BoardController {

  private final BoardService boardService;
  
  @PostMapping("/create")
  public ResponseEntity<BoardResponseDto> boardCreate(@Valid@RequestBody BoardCreateForm boardCreateForm) {

    Board board = boardService.boardCreate(boardCreateForm);
    
    // responseDto作成
    BoardResponseDto responseDto = boardService.createBoardResponseDto(board);
    
    return new ResponseEntity<BoardResponseDto>(responseDto, HttpStatus.CREATED);
  }
  
}
