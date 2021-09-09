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
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
    <div className="container">
      <h3>Crie sua conta</h3>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="TypeChoice">
          <input type="radio" id="instituition" value="instituition"></input>
          <label for="instituition">Instituição</label>
          <input type="radio" id="voluntary" value="voluntary"></input>
          <label for="voluntary">Voluntário</label>
        </div>

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
    </div>
  );
};

export default Register;
