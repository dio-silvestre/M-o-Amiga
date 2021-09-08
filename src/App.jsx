import Input from "./components/Input";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { FiMail, FiUser } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  const schema = yup.object().shape({
    username: yup.string().required("Nome de usuário obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <GlobalStyle />
      <Routes />
      <Input
        register={register}
        name="username"
        icon={FiUser}
        label="Nome de usuário"
        placeholder="Nome de usuário"
        error={errors.username?.message}
        colorSchema
      />
      <Input
        register={register}
        name="password"
        icon={FiMail}
        label="Senha"
        placeholder="Sua senha"
        type="password"
        error={errors.password?.message}
      />
    </>
  );
}

export default App;
