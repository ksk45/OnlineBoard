package io.github.ksk45.onlineboard.Model.Entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "t_board_member")
public class BoardMember extends AuditableEntity {
    @EmbeddedId
    private BoardMemberId boardMember;

    /**
     * ボードメンバーのキークラス(複合キー)
     */
    @Embeddable
    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BoardMemberId implements Serializable {
        @Column(name = "bm_board_id", nullable = false)
        private Integer boardId;
    
        @Column(name = "bm_user_id", nullable = false)
        private Integer userId;
    
    }
} 