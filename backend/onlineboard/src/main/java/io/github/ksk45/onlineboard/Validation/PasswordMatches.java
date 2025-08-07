package io.github.ksk45.onlineboard.Validation;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import static java.lang.annotation.ElementType.TYPE; // クラス、インターフェース、enum に適用可能
import static java.lang.annotation.RetentionPolicy.RUNTIME; // 実行時にもアノテーション情報が利用可能

@Target(TYPE)
@Retention(RUNTIME)
@Constraint(validatedBy = PasswordMatchesValidator.class)
public @interface PasswordMatches {
  String message() default "{VALIDATION_PASSWORD_MISMATCH}";

  Class<?>[] groups() default {};

  Class<? extends Payload>[] payload() default {};
}
