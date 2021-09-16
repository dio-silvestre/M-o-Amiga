import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { useComments } from "../../providers/Comments";

const Chat = ({ participate, actionId }) => {

    const history = useHistory();

    const [inputUser, setInputUser] = useState("")

    const { comments, addComment, deleteComment } = useComments();
    const { myData } = useAuth();

    const commentsAction = comments.filter((comment) => (
        comment.actionID === actionId
    ));

    const isMy = (comment) => {
        return comment.userId === myData.id;
    };

    const handleAddComment = () => {
        addComment(inputUser, actionId, myData.name)
        setInputUser("");
    };

    return (
        <>
        oi sou o chat
        <div>
            <h1>Chat da action </h1>
            <div>
                {commentsAction.map((comment, index) => (
                    <div key={index} isMyComment={isMy(comment)}>
                        {isMy(comment) && <button onClick={() => deleteComment(comment.id)}>Excluir</button>}
                        <span>{comment.comment}</span>
                        <span 
                            onClick={() => history.push(`/users/${comment.userId}`)}>
                            {comment.name?.split(" ")[0]}
                        </span>
                    </div>
                ))}
            </div>
            {participate ? (
                <div>
                <input 
                    type="text" 
                    value={inputUser}
                    onChange={(e) => setInputUser(e.target.value)}
                />
                <button onClick={handleAddComment}>Enviar</button>
            </div>
            ) : (
                <>Participe da ação para entrar na discussão!</>
            )}
        </div>
        </>
    );
};

export default Chat;