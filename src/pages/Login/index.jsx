import Input from "../../components/Input";
import Button from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../providers/Auth";
import { Link } from "react-router-dom";
import { AnimationContainer, Container, Content, Header } from "./styles";
import LoginLogo from "../../assets/LoginLogo.svg";
import LoginGirl from "../../assets/LoginGirl.svg";
import LoginGroup from "../../assets/LoginGroup.svg";

const Login = () => {
  const { signIn } = useAuth();

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("E-mail obrigatório")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "E-mail deve ser neste formato: xpto@mail.com"
      )
      .email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    signIn(data);
    reset();
  };

  return (
    <Container>
      <Header>
        <div>
          <img src={LoginLogo} alt="Mão Amiga Logo" />
          <div>
            <h1>Ajude quem precisa</h1>
            <p>um jeito mais fácil de fazer o bem</p>
          </div>
        </div>
      </Header>
      <Content>
        <div className="form-mobile">
          <AnimationContainer>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <h1>Acesse sua conta!</h1>
              <Input
                register={register}
                name="email"
                icon={FiMail}
                label="E-mail"
                placeholder="Digite seu e-mail"
                colorSchema
                error={errors.email?.message}
              ></Input>
              <Input
                register={register}
                name="password"
                icon={FiLock}
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                colorSchema
                error={errors.password?.message}
              ></Input>
              <Button type="submit" theme="login">
                Entrar
              </Button>
              <div>
                <p>
                  Ainda não possui uma conta?{" "}
                  <Link to="/register">Cadastre-se</Link>
                </p>
              </div>
            </form>
          </AnimationContainer>
        </div>
        <div className="images">
          <img className="girl" src={LoginGirl} alt="Figura garota" />
          <img className="ellipse" src={LoginGroup} alt="Figura com elipse" />
        </div>
      </Content>
    </Container>
  );
};

export default Login;
