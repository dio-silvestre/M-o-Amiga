import { useAuth } from "../../providers/Auth";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";
import { useActions } from "../../providers/Actions";

export const ModalListActions = () => {

    const { isLogged } = useAuth();
    const { modalIsOpen, toggleModal, listActionsModal } = useActions();

    const customStyles = {
        content: {
          background: "var(--color-base-default)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
    };

    if (!isLogged) {
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
                {listActionsModal.map((action, index) => <p key={index}>{action.name}</p>)}
            </>
        </Modal>
    );
};

export default ModalListActions;