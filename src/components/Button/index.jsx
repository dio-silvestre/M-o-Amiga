import { StyledButton } from "./styles";

const Button = ({ children, theme, ...rest }) => {
  return (
    <StyledButton theme={theme} type="button" {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
