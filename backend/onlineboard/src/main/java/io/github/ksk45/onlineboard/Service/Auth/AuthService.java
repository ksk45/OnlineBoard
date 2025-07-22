package io.github.ksk45.onlineboard.Service.Auth;

public interface AuthService {

  /**
   * メールアドレスがすでに登録されているかのチェック
   * 既に登録されている場合、例外（EmailAlreadyRegisteredException）をスロー
   *
   * @param email チェック対象のメールアドレス
   */
  public void isEmailExsists(String email);
}