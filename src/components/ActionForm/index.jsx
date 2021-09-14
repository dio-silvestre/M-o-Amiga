import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {Container, ContainerInfo, Container45, ContainerButton, ContainerForm} from "./styles"
import Input from "../Input";
import Button from "../Button";

import {useActions} from "../../providers/Actions"
import {useAuth} from "../../providers/Auth"
const ActionsLogin = () => {
    
    const {actions, addAction} = useActions(); 
    const {myData} = useAuth();
    
    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        description: yup.string().required("Descrição obrigatória"),
        category: yup.string().required("Categoria obrigatória"),
        numberOfVoluntaries: yup.string().required("Voluntários obrigatório").matches(/^[0-9]*$/, "Apenas números"),
        city: yup.string().required("Cidade obrigatória"),
        state: yup.string().required("Estado obrigatório"),
        hour: yup.string().required("Hora obrigatória").matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ , "Hora: HH/MM"),
        date: yup.string().required("Data obrigatória").matches(
          /^(0?[1-9]|[12][0-9]|3[01])[\/\\](0?[1-9]|1[012])[\/\\]\d{4}$/
          , "Data: DD/MM/YYYY"
        ),
      });
    
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(formSchema),
      });
    
      const onSubmitFunction = (data) => {
        addAction(data)
      };

    return(
        <Container onSubmit={handleSubmit(onSubmitFunction)}>
            <ContainerForm >
            <Input
                register={register}
                name="name"
                label="Nome da ação"
                placeholder=""
                colorSchema = {false}
                error={errors.name?.message}
              ></Input>
              <Input
                register={register}
                name="description"
                label="Descrição"
                placeholder=""
                colorSchema = {false}
                error={errors.description?.message}
              ></Input>
              <Input
                register={register}
                name="category"
                label="Categoria"
                placeholder=""
                colorSchema = {false}
                error={errors.category?.message}
              ></Input>
              <Input
                register={register}
                name="numberOfVoluntaries"
                label="Quantidade de voluntários"
                placeholder=""
                colorSchema = {false}
                error={errors.numberOfVoluntaries?.message}
              ></Input>
              <ContainerInfo>
                <Container45>
                <Input
                    register={register}
                    name="city"
                    label="Cidade"
                    placeholder=""
                    colorSchema = {false}
                    error={errors.city?.message}
                ></Input>
                </Container45>
                <Container45>
                <div>Estado</div>
                <select name="estados-brasil" {...register("state")} >
                  <option></option>
                  <option  value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
                <span>{errors.state?.message}</span>
                </Container45>
              </ContainerInfo>
              <ContainerInfo>
              <Container45>
                <Input
                    register={register}
                    name="date"
                    label="Data"
                    placeholder=""
                    colorSchema = {false}
                    error={errors.date?.message}
                ></Input>
                </Container45>
                <Container45>
                <Input
                    register={register}
                    name="hour"
                    label="Hora"
                    placeholder=""
                    colorSchema = {false}
                    error={errors.hour?.message}
                ></Input>
                </Container45>
              </ContainerInfo>
              </ContainerForm>
              <ContainerButton>
                <Button type="submit" theme="participate">
                  Cadastrar Ação
                </Button>
              </ContainerButton>
        </Container>
    )
}

export default ActionsLogin