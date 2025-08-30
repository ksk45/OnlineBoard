package io.github.ksk45.onlineboard.Service.Board;

import io.github.ksk45.onlineboard.Model.Entity.Board;
import io.github.ksk45.onlineboard.Model.Form.Board.BoardCreateForm;

public interface BoardService {
  
  /**
   * ボード情報のDB登録
   *
   * @param BoardCreateForm ボード入力情報
   * @return BoardEntity 登録したボードEntityを返却
   */
  public Board boardCreate(BoardCreateForm boardCreateForm);
}
