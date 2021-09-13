import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {Container, ContainerInfo, Container45, ContainerButton, ContainerForm} from "./styles"
import Input from "../Input"
import Button from "../Button";

import {useActions} from "../../providers/Actions"

const ActionsLogin = () => {

    const {actions, addAction} = useActions(); 

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        description: yup.string().required("Descrição obrigatória"),
        category: yup.string().required("Categoria obrigatória"),
        numberOfVoluntaries: yup.number().required("Voluntários obrigatório"),
        city: yup.string().required("Cidade obrigatória"),
        state: yup.string().required("Estado obrigatório"),
        hour: yup.string().required("Hora obrigatória"),
        date: yup.string().required("Data obrigatória"),
      });
    
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(formSchema),
      });
    
      const onSubmitFunction = (data) => addAction(data);

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
                label="Descriçaõ"
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
                error={errors.numberOfVolunteers?.message}
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
                <Input
                    register={register}
                    name="state"
                    label="Estado"
                    placeholder=""
                    colorSchema = {false}
                    error={errors.state?.message}
                ></Input>
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
              <Button type="submit" theme="registerAction">
                Cadastrar Ação
              </Button>
              </ContainerButton>
        </Container>
    )
}

export default ActionsLogin