package io.github.ksk45.onlineboard.Service.Auth;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
  
  @Override
  public boolean isEmailExsists(String email) {
    return false; // TODO: DB値との重複チェック
  }
}
