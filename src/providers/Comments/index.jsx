import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import jwtDecode from "jwt-decode";

const CommentsContext = createContext();

export const CommentsProvider = ({ children }) => {

    const localToken = localStorage.getItem("authToken") || "";
    const decodedToken = localToken === "" ? "" : jwtDecode(localToken);
    const userID = decodedToken.sub;

    const [comments, setComments] = useState([]);

    const fetchComments = () => {
        api
        .get(`/comments`, {
            headers: {
              Authorization: `Bearer ${localToken}`,
            },
          })
        .then((response) =>{
            setComments(response.data);
        })
        .catch((error) => console.error(error));
    };

    useEffect(() => {
      if(!!localToken) {
        fetchComments();
        // setInterval(fetchComments, 3000);
      }
    }, []);

    const addComment = (comment, actionId, name) => {
        api
        .post(`/comments`, {
            comment: comment,
            actionID: actionId,
            userId: Number(userID),
            name: name
        }, {
            headers: {
              Authorization: `Bearer ${localToken}`,
            },
          })
        .then((response) =>{
            setComments([...comments, response.data]);
        })
        .catch((error) => console.error(error));
    };

    const editComment = (newComment, commentId) => {
        api
        .patch(`/comments/${commentId}`, {
            comment: newComment,
            userId: Number(userID)
        }, {
            headers: {
              Authorization: `Bearer ${localToken}`,
            },
          })
        .then((response) =>{
            setComments([...comments, response.data]);
        })
        .catch((error) => console.error(error));
    };

    const deleteComment = (commentId) => {
        api
        .delete(`/comments/${commentId}`, {
            headers: {
              Authorization: `Bearer ${localToken}`,
            },
          })
        .then((_) =>{
            fetchComments();
        })
        .catch((error) => console.error(error));
    };

    return (
        <CommentsContext.Provider value={{comments, addComment, editComment, deleteComment}}>
            {children}
        </CommentsContext.Provider>
    );
};

export const useComments = () => useContext(CommentsContext);
