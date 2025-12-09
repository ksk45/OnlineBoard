package io.github.ksk45.onlineboard.Service.Auth;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import io.github.ksk45.onlineboard.Exception.Auth.EmailAlreadyRegisteredException;
import io.github.ksk45.onlineboard.Exception.Auth.UserNotExistsException;
import io.github.ksk45.onlineboard.Model.Entity.User;
import io.github.ksk45.onlineboard.Model.Form.Auth.SignInForm;
import io.github.ksk45.onlineboard.Model.Form.Auth.SignUpForm;
import io.github.ksk45.onlineboard.Model.Response.AuthResponseDto;
import io.github.ksk45.onlineboard.Repository.UserRepository;
import io.github.ksk45.onlineboard.Session.SessionUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {

  private final UserRepository userRepository;
  private final SessionUser sessionUser;

  @Override
  public void isEmailExsists(String email) throws EmailAlreadyRegisteredException {
    // DB検索し、同一emailのユーザーが存在したら戻り値をtrueに
    Optional<User> user = userRepository.findByEmail(email);
    if (user.isPresent()) {
      throw new EmailAlreadyRegisteredException("ERROR_EMAIL_ALREADY_REGISTERED");
    }
  }

  @Override
  public User regUser(SignUpForm signUpForm) {

    User userEntity = User.builder()
        .email(signUpForm.getEmail())
        .userName(signUpForm.getName())
        .password(signUpForm.getPassNew())
        .build();

    return userRepository.save(userEntity);
  }

  @Override
  public User getUser(SignInForm signInForm) {
    List<User> user = userRepository.findByEmailAndPassword(signInForm.getEmail(), signInForm.getPassword());

    if (user.size() == 0) {
      throw new UserNotExistsException("{ERROR_USER_NOT_EXISTS}");
    } else if (user.size() > 1) {
      log.error("同一メールアドレス・パスワードで複数ユーザーがヒットしました。メールアドレス：" + signInForm.getEmail());
      // 画面上は予期せぬエラーとして表示
      throw new ArrayIndexOutOfBoundsException();
    }

    return user.get(0);
  }

  @Override
  public void setSessionData(User user) {
    sessionUser.setUserId(user.getUserId());
    sessionUser.setUserName(user.getUserName());
    sessionUser.setUserEmail(user.getEmail());
    sessionUser.setLoginTime(LocalDateTime.now());
    sessionUser.setAccessTime(LocalDateTime.now());
  }

  @Override
  public AuthResponseDto createAuthResponseDto(User user) {
    return AuthResponseDto.builder()
                        .userId(user.getUserId())
                        .userName(user.getUserName())
                        .email(user.getEmail())
                        .build();
  }
}
