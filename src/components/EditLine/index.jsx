import Input from "../Input";
import {useForm} from "react-hook-form";
import { useState } from "react";
import { FiEdit, FiSend } from "react-icons/fi";
import {useParams} from "react-router";
import {useUser} from "../../providers/User";
import { Content} from "./styles.js";

const EditLine = ({name, placeholder}) => {

    const params = useParams();
    const [edit, setEdit] = useState(false);
    const { editProfile } = useUser();
    
    const {
      register,
      handleSubmit,
    } = useForm();
    
    const onSubmitFunction = (data) => {
      editProfile(params.userId, data);
      setEdit(false);
    };

    return(
        <Content>
        {edit === false ? 
            <FiEdit onClick = {()=> setEdit(!edit)}></FiEdit>
        :
          <>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                  <Input
                      register={register}
                      name={name}
                      colorSchema
                      placeholder={placeholder}
                  ></Input>
                  <button  type ="submit"> <FiSend /></button>   
                </form>
          </>
        }
        </Content>
    );
};

export default EditLine;