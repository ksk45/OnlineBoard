package io.github.ksk45.onlineboard.Service.Board;

import org.springframework.stereotype.Service;

import io.github.ksk45.onlineboard.Model.Form.Board.BoardCreateForm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardServiceImpl implements BoardService {

  @Override
  public void boardCreate(BoardCreateForm boardCreateForm) {
    
    // boardテーブルへのinsert sql発行
  }
  
}
