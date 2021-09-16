import { useHistory } from "react-router";
import { useActions } from "../../providers/Actions";
import {
    Container,
    ContainerData,
    ContainerEvent,
} from "./styles";

const CalendarCard = ({number,events}) => {

    const { toggleModal } = useActions();

    const history = useHistory();
    
    return (
    <Container>
        <ContainerData onClick={() => toggleModal(events)} haveEvent={events.length > 0}>{number}</ContainerData>
        <ContainerEvent>
        {events.filter((_, index) => index < 4).map((event, index) => (
            <div 
                key={index} 
                onClick={() => {
                    history.push(`/action/${event.id}`)
                    window.location.reload();
                }}
            >{event.name.slice(0,10)}{event.name.length > 11 ? "..." : ""}
            </div>
        ))}
        {events.length > 4 && <p onClick={() => toggleModal(events)}>Ver mais...</p> }
        </ContainerEvent>
    </Container>
    );
};

export default CalendarCard;