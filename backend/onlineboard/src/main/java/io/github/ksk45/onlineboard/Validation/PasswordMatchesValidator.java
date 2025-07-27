package io.github.ksk45.onlineboard.Validation;

import io.github.ksk45.onlineboard.Model.Form.Auth.SignUpForm;
// import io.github.ksk45.onlineboard.Validation.PasswordMatches;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class PasswordMatchesValidator implements ConstraintValidator<PasswordMatches, SignUpForm> {

  @Override
  public void initialize(PasswordMatches a) {
  }

  @Override
  public boolean isValid(SignUpForm signUpForm, ConstraintValidatorContext context) {
    // バリデーション対象（obj）をキャスト
    // if (!(obj instanceof SignUpForm)) {
      // return true;
    // }
    // SignUpForm signUpForm = (SignUpForm) obj;

    // バリデーションロジック
    boolean isValid = signUpForm.getPassNew().equals(signUpForm.getPassConf());

    if (!isValid) {
      // エラーを passNew と passConf フィールドに紐付け
      String[] propertyList = {"passNew", "passConf"};

      for (String property : propertyList) {
        context.buildConstraintViolationWithTemplate((context.getDefaultConstraintMessageTemplate()))
            .addPropertyNode(property)
            .addConstraintViolation(); // エラーを登録
      }
    }

    return isValid;
  }
}
