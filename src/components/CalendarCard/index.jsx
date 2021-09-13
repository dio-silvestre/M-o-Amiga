import {
    Container,
    ContainerData,
    ContainerEvent,
} from "./styles";

const CalendarCard = ({number,events}) => {
    
    return (
    <Container>
        <ContainerData haveEvent={events.length > 0}>{number}</ContainerData>
        <ContainerEvent>
        {events.filter((_, index) => index < 4).map((event, index) => <div key={index}>{event.name.slice(0,10)}{
            event.name.length > 11 ? "..." : ""
        }</div>)}
        {events.length > 4 && <p>Ver mais...</p> }
        </ContainerEvent>
    </Container>
    );
};

export default CalendarCard;