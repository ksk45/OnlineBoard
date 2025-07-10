import { Eye, EyeOff, LockKeyhole, Mail, User } from "lucide-react";
import { useState, type JSX } from "react";
import UIInput from "../ui/UIInput";

// props定義
type AuthInputProps = {
  errorMessage?: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AuthInput = (props: AuthInputProps) => {
  // inputのtype定義
  const types: Record<string, string> = {
    email: "email",
    pass: "password",
    pass_new: "password",
    pass_conf: "password",
  };
  const type = types[props.type] || "text";

  // input名定義
  const inputLabels: Record<string, string> = {
    email: "Email Address",
    pass: "Password",
    pass_new: "Password",
    pass_conf: "Confirm Password",
    name: "Name",
  };
  const inputLabel = inputLabels[props.type] || "Input value";

  // placeholderのアイコン定義
  const placeholderIconsClass = "absolute ml-2 text-gray-400";

  const placeholderIcons: Record<string, JSX.Element> = {
    email: <Mail className={placeholderIconsClass} />,
    pass: <LockKeyhole className={placeholderIconsClass} />,
    pass_new: <LockKeyhole className={placeholderIconsClass} />,
    pass_conf: <LockKeyhole className={placeholderIconsClass} />,
    name: <User className={placeholderIconsClass} />,
  };
  const placeholderIcon = placeholderIcons[props.type] || null;

  // placeholder定義
  const placeholders: Record<string, string> = {
    email: "Enter your email",
    pass: "Enter your password",
    pass_new: "Create a password",
    pass_conf: "Confirm your password",
    name: "Enter your Name",
  };
  const placeholder = placeholders[props.type] || "Enter value";

  // pass確認ボタン定義
  const [isVisible, setIsVisible] = useState(false);
  const passVisibleButton = (
    <button
      type="button"
      onClick={() => setIsVisible(!isVisible)}
      className="absolute right-2 text-gray-400"
      tabIndex={-1}
    >
      {(props.type === "pass" || props.type === "pass_new") &&
        (isVisible ? <EyeOff /> : <Eye />)}
    </button>
  );

  return (
    <div onBlur={() => setIsVisible(false)}>
      <UIInput
        type={isVisible ? "text" : type}
        placeholder={placeholder}
        onChange={props.onChange}
        inputLabel={inputLabel}
        leftIcon={placeholderIcon}
        rightIcon={passVisibleButton}
        errorMessage={props.errorMessage}
      />
    </div>
  );
};

export default AuthInput;
