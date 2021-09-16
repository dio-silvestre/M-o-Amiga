import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { useComments } from "../../providers/Comments";
import { FiSend, FiTrash2 } from "react-icons/fi";
import { SiHipchat } from "react-icons/si";
import {
    ButtonOpen,
    ContainerChat,
    Title,
    ContainerTalk,
    Comment,
    ContainerIntput,
    ButtonSendMessage,
    NotParticipate,
} from "./styles"

const Chat = ({ participate, isCreator, actionId }) => {

    const history = useHistory();

    const [inputUser, setInputUser] = useState("");
    const [openChat, setOpenChat] = useState(false);

    const { comments, addComment, deleteComment, fetchComments } = useComments();
    const { myData } = useAuth();

    useEffect(() => {
        fetchComments();
    }, [])

    const commentsAction = comments.filter((comment) => (
        comment.actionID === actionId
    ));

    const isMy = (comment) => {
        return comment.userId === myData.id;
    };

    const handleAddComment = () => {
        if (inputUser.length > 0) {
            addComment(inputUser, actionId, myData.name)
            setInputUser("");
        };
    };

    return (
        <>
            <ButtonOpen onClick={() => setOpenChat(!openChat)}><SiHipchat/></ButtonOpen>
            <ContainerChat openChat={openChat}>
                <Title>Chat</Title>
                <ContainerTalk>
                    {commentsAction.map((comment, index) => (
                        <Comment key={index} isMyComment={isMy(comment)}>
                            <span 
                                onClick={() => history.push(`/users/${comment.userId}`)}>
                                {comment.name?.split(" ")[0]}
                            </span>
                            <p>{comment.comment}</p>
                            {isMy(comment) && <button onClick={() => deleteComment(comment.id)}><FiTrash2/></button>}
                        </Comment>
                    ))}
                </ContainerTalk>
                {participate || isCreator ? (
                    <ContainerIntput>
                        <textarea
                            maxLength="256" 
                            spellCheck="true"
                            placeholder="Digite uma mensagem..."
                            type="text" 
                            value={inputUser}
                            onChange={(e) => setInputUser(e.target.value)}
                        />
                        <ButtonSendMessage onClick={handleAddComment}><FiSend/></ButtonSendMessage>
                    </ContainerIntput>
                ) : (
                    <NotParticipate>Participe da ação para entrar na discussão!</NotParticipate>
                )}
            </ContainerChat>
        </>
    );
};

export default Chat;