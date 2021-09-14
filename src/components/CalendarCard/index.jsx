import {
    Container,
    ContainerData,
    ContainerEvent,
} from "./styles";
import { useActions } from "../../providers/Actions";

const CalendarCard = ({number,events}) => {

    const { toggleModal } = useActions();
    
    return (
    <Container>
        <ContainerData onClick={() => toggleModal(events)} haveEvent={events.length > 0}>{number}</ContainerData>
        <ContainerEvent>
        {events.filter((_, index) => index < 4).map((event, index) => <div key={index}>{event.name.slice(0,10)}{
            event.name.length > 11 ? "..." : ""
        }</div>)}
        {events.length > 4 && <p onClick={() => toggleModal(events)}>Ver mais...</p> }
        </ContainerEvent>
    </Container>
    );
};

export default CalendarCard;