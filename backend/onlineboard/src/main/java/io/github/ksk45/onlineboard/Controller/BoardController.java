package io.github.ksk45.onlineboard.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.ksk45.onlineboard.Model.Entity.Board;
import io.github.ksk45.onlineboard.Model.Form.Board.BoardCreateForm;
import io.github.ksk45.onlineboard.Model.Form.Common.UserContext;
import io.github.ksk45.onlineboard.Service.Board.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("board")
public class BoardController {

  private final BoardService boardService;
  
  @PostMapping("/create")
  public String boardCreate(@RequestBody BoardCreateForm boardCreateForm) {

    // テストコード
    boardCreateForm.setUserContext(UserContext.builder().userId(0).build());
    // テストコード

    Board board = boardService.boardCreate(boardCreateForm);
    
    // return entity;
    return "return";
  }
  
}
