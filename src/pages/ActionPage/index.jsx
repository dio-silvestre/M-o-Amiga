import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../providers/User";
import { useActions } from "../../providers/Actions";
import Loading from "./../../assets/img/loading.gif";



const ActionPage = () => {

    const { alreadyParticipate, actions, participateAction, leaveAction, userID, deleteAction } = useActions();
    const { userData, fetchUserData } = useUser();

    const [isLoading, setIsLoading] = useState(true);
    const [participate, setParticipate] = useState(false);
    const [fetch, setFetched] = useState(false);
    const [isCreator, setIscreator] = useState(false);
    const [specificAction, setSpecificAction] = useState({});

    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        api
        .get(`/actions/${params.actionId}`)
        .then((response) =>{
            setSpecificAction(response.data);
            fetchUserData(params.actionId);
            setFetched(true);
        })
        .catch((error) => console.error(error));
    }, [params.actionId, actions, fetchUserData]);

    useEffect(() => {
        if(actions.length > 0 && fetch) {
            setIscreator(specificAction.id === Number(userID));
            setParticipate(alreadyParticipate(Number(params.actionId)));
            setIsLoading(false);
        };
    }, [fetch, actions]);

    return (
        <>
            {isLoading ? (
                <img src={Loading} alt="Loading" />
            ) : (
                <> 
                    <h1>{specificAction.name}</h1>
                    <>
                        <h3><span>Categoria:</span>{specificAction.category}</h3>
                        <h3><span>Data:</span>{specificAction.date}</h3>
                        <h3><span>Descrição:</span>{specificAction.description}</h3>
                        <h3><span>Cidade:</span>{specificAction.city}/{specificAction.state}</h3>
                        <h3><span>Quantidade de voluntários inscritos:</span>{specificAction.voluntaries.length}/{specificAction.number_voluntaries}</h3>
                        <h3><span>Instituição responsável:</span><Link to={`/institution/${specificAction.userId}`}>{userData.name}</Link></h3>

                        {isCreator ? (
                            <button onClick={() => {
                                deleteAction(params.actionId);
                                history.push("/dashboard");
                            }}>Deletar ação</button>
                        ) : (
                            <>
                            {!participate ? (
                                <>
                                    <h2>Deseja participar desta ação?</h2>
                                    <button onClick={() => {
                                        participateAction(params.actionId);
                                        setIsLoading(true);
                                        }}>Sim</button>
                                </>
                            ): (
                                <>
                                    <button onClick={() => {
                                        leaveAction(params.actionId);
                                        setIsLoading(true);
                                        }}>Abandonar esta ação</button>
                                </>
                            )}
                            </>
                        )}
                    </> 
                </>
            )}
        </>
    );
};

export default ActionPage;