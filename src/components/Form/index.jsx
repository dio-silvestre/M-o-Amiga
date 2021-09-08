import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Form() {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    name: yup.string().required("Nome obrigatório"),
    city: yup.string().required("Cidade obrigatória"),
    state: yup.string().required("Estado obrigatório"),
    interestField: yup.string().required("Endereço obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    password2: yup.string().required("Senhas não correspondentes"),
  });

  return()
}

export default Form;
