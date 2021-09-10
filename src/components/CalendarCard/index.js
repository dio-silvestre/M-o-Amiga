import {Container, ContainerData, ContainerEvent} from "./styles"

const CalendarCard = ({number,events}) => {
    return (
    <Container>
        <ContainerData>{number}</ContainerData>
        { window.innerWidth > 700 ?
        <ContainerEvent>
        {events.map((event) => <div>{event.name}</div>)}
        </ContainerEvent>
        :
        <></>
        }
    </Container>
    )
}

export default CalendarCard;