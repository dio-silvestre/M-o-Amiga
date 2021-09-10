import { Container, InputContainer } from "./styles";

const Input = ({
  label,
  icon: Icon,
  register,
  name,
  error = "",
  colorSchema = false,
  ...rest
}) => {
  return (
    <Container colorSchema={colorSchema}>
      <div>{label}</div>

      <InputContainer isErrored={!!error} colorSchema={colorSchema}>
        {Icon && <Icon size={20} />}
        <input {...register(name)} {...rest} colorSchema={colorSchema} />
      </InputContainer>

      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default Input;
