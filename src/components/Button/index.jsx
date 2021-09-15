import { StyledButton } from "./styles";

const Button = ({ children, theme, ...rest }) => {
  return (
    <StyledButton data-testid="form-btn" theme={theme} type="button" {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
