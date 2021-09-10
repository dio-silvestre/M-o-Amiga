import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  FiMail,
  FiLock,
  FiUser,
  FiMap,
  FiMapPin,
  FiHeart,
  FiKey,
  FiThumbsUp,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Msg1,
  Msg2,
  H3,
  Blue,
  AnimationContainer,
  Container,
  Form,
  Ul,
  Logo,
  Ballon,
} from "./styles";
import RegisterBallons from "../../assets/RegisterBallons.svg";
import RegisterWhiteLogo from "../../assets/RegisterWhiteLogo.svg";

const Register = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    name: yup.string().required("Nome obrigatório"),
    city: yup.string().required("Cidade obrigatória"),
    state: yup.string().required("Estado obrigatório"),
    areas_interest: yup.string().required("Endereço obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    password2: yup.string().required("Senhas não correspondentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => console.log(data);

  return (
    <>
      <Blue>
        <Msg1>
          <FiThumbsUp color="black" fill="black" />
          <h2>Recrute!</h2>
          <h3>Aqui você pode recrutar voluntários para sua ação social</h3>
        </Msg1>
        <Msg2>
          <FiHeart color="black" fill="black" />
          <h2>Procurando fazer o bem?</h2>
          <h3>
            Aqui você pode pesquisar por eventos sociais para fazer parte!
          </h3>
        </Msg2>
      </Blue>
      <H3>Crie sua conta</H3>
      <AnimationContainer>
        <Container>
          <Form>
            <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
              <Ul>
                <li>
                  <input
                    type="radio"
                    value="instituition"
                    name="radio"
                    id="instituition"
                  />
                  <label for="instituition">Instituição</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="voluntary"
                    name="radio"
                    id="voluntary"
                  />
                  <label for="voluntary">Voluntário</label>
                </li>
              </Ul>

              <Input
                register={register}
                name="name"
                icon={FiUser}
                label="Nome"
                placeholder="Digite seu nome"
                colorSchema
                error={errors.name?.message}
              ></Input>

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
                name="city"
                icon={FiMapPin}
                label="Cidade"
                placeholder="Informe sua cidade"
                colorSchema
                error={errors.city?.message}
              ></Input>

              <Input
                register={register}
                name="state"
                icon={FiMap}
                label="Estado"
                placeholder="Informe seu estado"
                colorSchema
                error={errors.state?.message}
              ></Input>

              <Input
                register={register}
                name="areas_interest"
                icon={FiHeart}
                label="Áreas de interesse"
                placeholder="Informe suas áreas de interesse"
                colorSchema
                error={errors.areas_interest?.message}
              ></Input>

              <Input
                register={register}
                name="password"
                icon={FiKey}
                label="Senha"
                placeholder="Informe sua senha"
                colorSchema
                error={errors.password?.message}
              ></Input>

              <Input
                register={register}
                name="password2"
                icon={FiLock}
                label="Confirmação de Senha"
                placeholder="Confirme a senha"
                colorSchema
                error={errors.password2?.message}
              ></Input>

              <Button type="submit" theme="register">
                Finalizar Cadastro
              </Button>

              <p>
                Já possui uma conta? <Link to="/login">LOGIN</Link>
              </p>
            </form>
          </Form>
        </Container>
      </AnimationContainer>
      <div className="images">
        <Logo className="logo" src={RegisterWhiteLogo} alt="Logo" />
        <Ballon className="ballon" src={RegisterBallons} alt="Figura garota" />
      </div>
    </>
  );
};

export default Register;
