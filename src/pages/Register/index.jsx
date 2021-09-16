import Input from "../../components/Input";
import Button from "../../components/Button";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Content,
  AnimationContainer,
  AnimationContainer2,
  Switch,
  ButtonInstitution,
  ButtonVoluntary,
} from "./styles";
import RegisterBallons from "../../assets/RegisterBallons.svg";
import LoginLogo from "../../assets/LoginLogo.svg";
import { useState } from "react";
import { useUser } from "../../providers/User";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Auth";

const Register = () => {
  const { createAccount } = useUser();

  const [userType, setUserType] = useState("institution");

  const { isLogged } = useAuth();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
    password_confirm: yup.string().required("Senhas não correspondentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = ({ name, email, password }) => {
    const newUser = {
      name,
      email,
      password,
      user_type: userType,
    };
    createAccount(newUser);
  };

  if (isLogged) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Header>
        <div>
          <Link to="/">
            <img src={LoginLogo} alt="Mão Amiga Logo" />
          </Link>
          <div className="textBox1">
            <h1>Recrute! </h1>
            <p>Aqui você pode encontrar voluntários para sua ação social</p>
          </div>
          <div className="textBox2">
            <h1>Procurando fazer o bem?</h1>
            <p>Aqui você pode pesquisar por ações sociais para fazer parte!</p>
          </div>
        </div>
      </Header>
      <Content>
        <div className="form-mobile">
          <AnimationContainer>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <h1>Cadastre-se!</h1>
              <h4>Sou</h4>
              <Switch>
                <ButtonInstitution
                  className="institution-button"
                  userType={userType}
                  onClick={(e) => e.preventDefault(setUserType("institution"))}
                >
                  Instituição
                </ButtonInstitution>
                <ButtonVoluntary
                  className="voluntary-button"
                  userType={userType}
                  onClick={(e) => e.preventDefault(setUserType("voluntary"))}
                >
                  Voluntário
                </ButtonVoluntary>
              </Switch>
              <div className="input-container">
                <div className="flex-column">
                  <Input
                    register={register}
                    name="name"
                    icon={FiUser}
                    label={
                      userType === "institution"
                        ? "Nome da Instituição"
                        : "Nome"
                    }
                    placeholder={
                      userType === "institution"
                        ? "Digite o nome"
                        : "Digite seu nome"
                    }
                    colorSchema
                    error={errors.name?.message}
                  />
                  <Input
                    register={register}
                    name="email"
                    icon={FiMail}
                    label="E-mail"
                    placeholder={
                      userType === "institution"
                        ? "Digite o e-mail"
                        : "Digite seu e-mail"
                    }
                    colorSchema
                    error={errors.email?.message}
                  />
                </div>
                <div className="flex-column">
                  <Input
                    register={register}
                    name="password"
                    icon={FiLock}
                    label="Senha"
                    placeholder="Digite sua senha"
                    type="password"
                    colorSchema
                    error={errors.password?.message}
                  />
                  <Input
                    register={register}
                    name="password_confirm"
                    icon={FiLock}
                    label=" Confirme sua senha"
                    placeholder=" Confirme sua senha"
                    type="password"
                    colorSchema
                    error={errors.password_confirm?.message}
                  />
                </div>
              </div>
              <Button type="submit" theme="login">
                Registrar
              </Button>
              <div>
                <p>
                  Já possui uma conta? <Link to="/login">Faça o Login</Link>
                </p>
              </div>
            </form>
          </AnimationContainer>
        </div>
        <AnimationContainer2>
          <div className="images">
            <img
              className="ellipse"
              src={RegisterBallons}
              alt="Figura com elipse"
            />
          </div>
        </AnimationContainer2>
      </Content>
    </Container>
  );
};

export default Register;
