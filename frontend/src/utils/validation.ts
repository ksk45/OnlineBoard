// validation 必須項目チェック
export const validateRequired = (value: string, message = "必須項目です") =>
  value ? "" : message;

// validation 最大文字数チェック
export const validateMaxLength = (value: string, max: number, message?: string) =>
  value.length > max ? (message || `${max}文字以内で入力してください`) : "";

// validation 最小文字数チェック
export const validateMinLength = (value: string, min: number, message?: string) =>
  value.length < min ? (message || `${min}文字以上で入力してください`) : "";

// validation メールアドレス形式チェック
export const validateEmailFormat = (value: string, message = "有効なメールアドレス形式で入力してください") =>
  value.includes("@") && value.includes(".") ? "" : message;

// validation パスワード複雑性チェック
export const validatePasswordComplexity = (value: string, message = "英字と数字を両方含めてください") =>
  /[a-zA-Z]/.test(value) && /[0-9]/.test(value) ? "" : message;
