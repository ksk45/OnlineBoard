package io.github.ksk45.onlineboard.Service.Board;

import io.github.ksk45.onlineboard.Model.Form.Board.BoardCreateForm;

public interface BoardService {
  
  /**
   * ボード新規作成
   *
   * @param BoardCreateForm ボード入力情報
   */
  public void boardCreate(BoardCreateForm boardCreateForm);
}
