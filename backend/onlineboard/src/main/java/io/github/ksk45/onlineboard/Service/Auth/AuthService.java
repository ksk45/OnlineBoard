package io.github.ksk45.onlineboard.Service.Auth;

import io.github.ksk45.onlineboard.Model.Entity.User;
import io.github.ksk45.onlineboard.Model.Form.Auth.SignUpForm;

public interface AuthService {

  /**
   * メールアドレスがすでに登録されているかのチェック
   * 既に登録されている場合、例外（EmailAlreadyRegisteredException）をスロー
   *
   * @param email チェック対象のメールアドレス
   */
  public void isEmailExsists(String email);

  /**
   * ユーザー情報のDB登録
   *
   * @param signUpForm 登録フォーム
   * @return UserEntity 登録したユーザーEntityを返却
   */
  public User regUser(SignUpForm signUpForm);
}