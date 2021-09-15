import { StyledButton } from "./styles";
import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  theme: "login" | "signUp" | "registerAction" | "participate" | "leave";
  onClick?: () => void;
}

const Button = ({ children, theme, ...rest }: IButtonProps) => {
  return (
    <StyledButton data-testid="form-btn" theme={theme} type="button" {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
