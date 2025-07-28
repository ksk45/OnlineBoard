package io.github.ksk45.onlineboard.Service.Auth;

import java.util.Optional;

import org.springframework.stereotype.Service;

import io.github.ksk45.onlineboard.Exception.Auth.EmailAlreadyRegisteredException;
import io.github.ksk45.onlineboard.Model.Entity.User;
import io.github.ksk45.onlineboard.Model.Form.Auth.SignUpForm;
import io.github.ksk45.onlineboard.Repository.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

  private final UserRepository userRepository;

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
}
