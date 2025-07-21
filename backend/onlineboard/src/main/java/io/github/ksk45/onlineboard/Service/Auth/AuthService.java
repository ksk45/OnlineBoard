package io.github.ksk45.onlineboard.Service.Auth;

public interface AuthService {

  /**
   * メールアドレスがすでに登録されているかのチェック
   *
   * @param email チェック対象のメールアドレス
   * @return true: 登録済み, false: 未登録
   */
  public boolean isEmailExsists(String email);
}