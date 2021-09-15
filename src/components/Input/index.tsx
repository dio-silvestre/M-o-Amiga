import { ReactNode } from "react";
import { Container, InputContainer } from "./styles";

interface IInputProps {
  label: string;
  icon: string;
  name: string;
  register: (name: string) => void;
  error: string;
  theme: string;
  children: ReactNode;
}

const Input = ({
  label,
  icon: Icon,
  register,
  name,
  error = "",
  theme,
  ...rest
}: IInputProps) => {
  return (
    <Container theme={theme}>
      <div>{label}</div>

      <InputContainer
        className="InputRegisterAction"
        isErrored={!!error}
        theme={theme}
      >
        {Icon && <Icon size={20} />}
        <input
          {...register(name)}
          {...rest}
          theme={theme}
          data-testid="input-field"
        />
      </InputContainer>

      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default Input;
