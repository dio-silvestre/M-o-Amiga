import {Container, ContainerData, ContainerEvent} from "./styles"

const CalendarCard = ({number,events}) => {
    
    return (
    <Container>
        <ContainerData>{number}</ContainerData>
        { window.innerWidth > 768 ?
        <ContainerEvent>
        {events.map((event) => <div>{event.name.slice(0,10)}{
            event.name.length > 11 ? ".." : ""
        }</div>)}
        </ContainerEvent>
        :
        <></>
        }
    </Container>
    )
}


export default CalendarCard;