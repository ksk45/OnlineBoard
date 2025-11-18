package io.github.ksk45.onlineboard.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.ksk45.onlineboard.Model.Entity.BoardMember;

public interface BoardMemberRepository extends JpaRepository<BoardMember, BoardMember.BoardMemberId> {
  
}