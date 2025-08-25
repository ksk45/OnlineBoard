package io.github.ksk45.onlineboard.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.ksk45.onlineboard.Model.Form.Board.BoardCreateForm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("board")
public class BoardController {
  
  @PostMapping("/create")
  public String postMethodName(@RequestBody BoardCreateForm boardCreateForm) {
    System.out.println("debug");
      //TODO: process POST request
      
      // return entity;
      return "return";
  }
  
}
