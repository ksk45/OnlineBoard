package io.github.ksk45.onlineboard.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import io.github.ksk45.onlineboard.Model.Dto.BoardMenuDto;
import io.github.ksk45.onlineboard.Model.Entity.Board;

public interface BoardRepository extends JpaRepository<Board, Integer> {
  
  /**
   * ボード一覧情報取得SQL
   */
  @Query(
    value = """
      SELECT
        b.board_uuid AS boardUuid,
        b.board_name AS boardName,
        b.board_owner_id AS boardOwnerId,
        b.created_at AS boardCreatedAt,
        b.updated_at AS boardUpdatedAt,
        COUNT(bm.bm_user_id) OVER (PARTITION BY b.board_id) AS memberCount
      FROM t_board b
      LEFT JOIN t_board_member bm
      ON bm.bm_board_id = b.board_id
      WHERE bm.bm_user_id = :user_id
    """,
    nativeQuery = true
  )
  List<BoardMenuDto> findBoardInfoList(@Param("user_id") Integer user_id);
}