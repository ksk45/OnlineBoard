package io.github.ksk45.onlineboard.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.ksk45.onlineboard.Model.Entity.BoardMember;
import io.github.ksk45.onlineboard.Model.Entity.BoardMemberId;

public interface BoardMemberRepository extends JpaRepository<BoardMember, BoardMemberId> {
  
}