import Modal from "react-modal";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { useActions } from "../../providers/Actions";
import { 
    ButtonClose,
    ContainerActions,
    Action
} from "./styles";

export const ModalListActions = () => {

    const { isLogged } = useAuth();
    const { modalIsOpen, toggleModal, listActionsModal } = useActions();

    const history = useHistory();

    const customStyles = {
        content: {
          background: "var(--color-primary-two)",
          width: "65%",
          heigth: "60%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12px"
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
            <ButtonClose
                onClick={() => toggleModal([])}
            >X
            </ButtonClose>
            <ContainerActions>
                {listActionsModal.length === 0 ? (
                    <h2>Não há ações cadastradas neste dia...</h2>
                ) : (
                    <>
                    {listActionsModal.map((action, index) => (
                        <Action 
                            key={index}
                            oddOrEven={index}
                            qtyActions={listActionsModal.length}
                            onClick={() => history.push(`/action/${action.id}`)}>
                            <span>{action.date}</span>
                            <span>{action.hour}</span>
                            <span>{action.name}</span>
                            <span>{action.city}/{action.state}</span>
                        </Action>
                    ))}
                    </>
                )}
            </ContainerActions>
        </Modal>
    );
};

export default ModalListActions;