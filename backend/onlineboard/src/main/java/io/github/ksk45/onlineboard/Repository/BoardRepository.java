package io.github.ksk45.onlineboard.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.ksk45.onlineboard.Model.Entity.Board;

public interface BoardRepository extends JpaRepository<Board, Integer> {
  
}