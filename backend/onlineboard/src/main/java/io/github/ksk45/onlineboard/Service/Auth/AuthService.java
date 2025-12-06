package io.github.ksk45.onlineboard.Service.Auth;

import io.github.ksk45.onlineboard.Model.Entity.User;
import io.github.ksk45.onlineboard.Model.Form.Auth.SignInForm;
import io.github.ksk45.onlineboard.Model.Form.Auth.SignUpForm;
import io.github.ksk45.onlineboard.Model.Response.AuthResponseDto;

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

  /**
   * 入力ユーザー情報取得（サインイン画面）
   * 入力ユーザーが存在しない場合、例外(UserNotExistsException)をスロー
   *
   * @param signInForm 入力フォーム
   * @return User 取得したユーザーEntity
   */
  public User getUser(SignInForm signInForm);

  /**
   * セッション情報の登録
   *
   * @param user
  */
  public void setSessionData(User user);

  /**
   * 画面返却用Dto作成
   *
   * @param User ユーザーEntity
   * @return AuthResponseDto サインイン・サインアップ用Dto
   */
  public AuthResponseDto createAuthResponseDto(User user);
}