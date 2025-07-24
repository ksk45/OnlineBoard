package io.github.ksk45.onlineboard.Service.Auth;

import io.github.ksk45.onlineboard.model.Form.Auth.SignUpForm;

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
   */
  public void regUser(SignUpForm signUpForm);
}