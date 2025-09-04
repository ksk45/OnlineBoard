package io.github.ksk45.onlineboard.Validation;

import io.github.ksk45.onlineboard.Model.Form.Common.UserContext;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class ValidUserContextValidator implements ConstraintValidator<ValidUserContext, UserContext> {
    @Override
    public void initialize(ValidUserContext constraintAnnotation) {
        // 必要であれば初期化ロジック
    }

    @Override
    public boolean isValid(UserContext userContext, ConstraintValidatorContext context) {
        // userContextがnullでなく、かつuserContext内のuserIdもnullでないことを確認
        // ここでuserContextの他のプロパティも検証できます
        return userContext != null && userContext.getUserId() != null;
    }
}
