package io.github.ksk45.onlineboard.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.ksk45.onlineboard.model.Entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
  Optional<User> findByEmail(String email);
}