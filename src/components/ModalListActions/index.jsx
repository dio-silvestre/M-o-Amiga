import { useAuth } from "../../providers/Auth";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";
import { useActions } from "../../providers/Actions";
import { useHistory } from "react-router";

export const ModalListActions = () => {

    const { isLogged } = useAuth();
    const { modalIsOpen, toggleModal, listActionsModal } = useActions();

    const history = useHistory();

    const customStyles = {
        content: {
          background: "var(--color-base-default)",
          width: "60%",
          height: "60%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
    };

    if (!isLogged && modalIsOpen) {
        return <Redirect to="/login" />;
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => toggleModal([])}
            style={customStyles}
        >
            <button
                style={{ position: "absolute", right: "0.5rem", top: "0.2rem" }}
                onClick={() => toggleModal([])}
            >X
            </button>
            <>
                {listActionsModal.map((action, index) => (
                    <div key={index} onClick={() => history.push(`/action/${action.id}`)}>
                        <>{action.date}</>
                        <>{action.name}</>
                        <>{action.city}/{action.state}</>
                    </div>
                ))}
            </>
        </Modal>
    );
};

export default ModalListActions;