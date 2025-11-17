package io.github.ksk45.onlineboard.Model.Entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BoardMemberId implements Serializable {
  @Column(name = "bm_board_id", nullable = false)
  private Integer boardId;

  @Column(name = "bm_user_id", nullable = false)
  private Integer userId;

}