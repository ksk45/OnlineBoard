package io.github.ksk45.onlineboard.Validation;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.*;

@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = ValidUserContextValidator.class)
@Documented
public @interface ValidUserContext {
    String message() default "{VALIDATION_USER_CONTEXT_INVALID}"; // デフォルトメッセージキー
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
