package io.github.ksk45.onlineboard.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.ksk45.onlineboard.Model.Entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
  /**
   * メールアドレス存在チェック
   * @param email
   * @return Optional<User> ユーザーの存在情報
   */
  Optional<User> findByEmail(String email);

  /**
   * メールアドレス・パスワードからユーザー情報の取得
   * @param email
   * @param password
   * @return 取得したユーザー情報のList
   */
  List<User> findByEmailAndPassword(String email, String password);
}