import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.css";

function Form() {
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
        <input type="radio" id="instituition" value="instituition"></input>
        <label for="instituition">Instituição</label>
        <input type="radio" id="voluntary" value="voluntary"></input>
        <label for="voluntary">Voluntario</label>

        <input placeholder="Nome" {...register("name")} />
        {errors.name?.message}
        <input placeholder="Email" {...register("email")} />
        {errors.email?.message}
        <input placeholder="Cidade" {...register("city")} />
        {errors.city?.message}
        <input placeholder="Estado" {...register("state")} />
        {errors.state?.message}
        <input
          placeholder="Área de interesse"
          {...register("areas_interest")}
        />
        {errors.areas_interest?.message}
        <input placeholder="Senha" {...register("password")} />
        {errors.password?.message}
        <input placeholder="Confirme a senha" {...register("password2")} />
        {errors.password2?.message}
        <button type="submit">Enviar!</button>
      </form>
    </div>
  );
}

export default Form;
