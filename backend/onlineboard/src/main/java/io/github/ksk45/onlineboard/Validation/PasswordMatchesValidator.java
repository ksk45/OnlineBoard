package io.github.ksk45.onlineboard.Validation;

import io.github.ksk45.onlineboard.Model.Form.Auth.SignUpForm;
// import io.github.ksk45.onlineboard.Validation.PasswordMatches;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class PasswordMatchesValidator implements ConstraintValidator<PasswordMatches, Object> {

  @Override
  public void initialize(PasswordMatches a) {
  }

  @Override
  public boolean isValid(Object obj, ConstraintValidatorContext context) {
    // バリデーション対象（obj）をキャスト
    if (!(obj instanceof SignUpForm)) {
      return true;
    }
    SignUpForm signUpForm = (SignUpForm) obj;

    // バリデーションロジック
    boolean isValid = signUpForm.getPassNew().equals(signUpForm.getPassConf());

    if (!isValid) {
      // context.disableDefaultConstraintViolation();
      context.buildConstraintViolationWithTemplate((context.getDefaultConstraintMessageTemplate()))
          .addPropertyNode("passConf") // エラーを passConf フィールドに紐付け
          .addConstraintViolation(); // エラーを登録
    }

    return isValid;
  }
}
