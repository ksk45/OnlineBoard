package io.github.ksk45.onlineboard.Service.Board;

import io.github.ksk45.onlineboard.Model.Entity.Board;
import io.github.ksk45.onlineboard.Model.Form.Board.BoardCreateForm;
import io.github.ksk45.onlineboard.Model.Response.BoardResponseDto;

public interface BoardService {
  
  /**
   * ボード情報のDB登録
   *
   * @param BoardCreateForm ボード入力情報
   * @return BoardEntity 登録したボードEntityを返却
   */
  public Board boardCreate(BoardCreateForm boardCreateForm);

  /**
   * 画面返却用Dto作成
   *
   * @param Board ボードEntity
   * @return BoardResponseDto ボード新規作成用Dto
   */
  public BoardResponseDto createBoardResponseDto(Board board);

  /**
   * ボードメンバー情報のDB登録
   *
   * @param boardId ボードID
   * @param userId ユーザーID
   */
  public void boardMemberCreate(Integer boardId, Integer userId);
}
