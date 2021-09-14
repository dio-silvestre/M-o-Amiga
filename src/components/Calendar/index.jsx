import { useEffect, useState } from "react";
import CalendarCard from "../CalendarCard";
import {
    Container,
    ContainerDatas,
    Box,
    ContainerAnoMes,
    ContainerHeader,
    ContainerButtons,
    MobileEvents,
} from "./styles";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";
import { useActions } from "../../providers/Actions";


const Calendar = () => {
    
    const { actions } = useActions();
    
    const createCalendar = (month) => {
        
        let year = new Date().getFullYear();
        while(month > 12 || month <= 0){

            if(month > 12){
                month = month - 12;
                year = year + 1;
            };

            if(month <= 0){
                month = 12 + month
                year = year - 1;
            };
        };
        
        const months=[
            {"month": "January", "index": 1, "days": 31},
            {"month": "February", "index": 2, "days": 28},
            {"month": "March", "index": 3, "days": 31},
            {"month": "April", "index": 4, "days": 30},
            {"month": "May", "index": 5, "days": 31},
            {"month": "June", "index": 6, "days": 30},
            {"month": "July", "index": 7, "days": 31},
            {"month": "August", "index": 8, "days": 31},
            {"month": "September", "index": 9, "days": 30},
            {"month": "Octuber", "index": 10, "days": 31},
            {"month": "November", "index": 11, "days": 30},
            {"month": "Dezember", "index": 12, "days": 31},
        ];

        const dates = [];

        for(let i = 0; i < months.length; i++){
            if(months[i].index == month){
                for(let j = 1; j <= months[i].days; j++){
                    let newDay = new Date(year, month-1, j);
                    let date = `${j<10 ? "0" : ""}${j}/${months[i].index < 10 ? "0" : ""}${months[i].index}/${year}`
                    dates.push({"date": date,"year": year, "day": j,"month": months[i].month, "dayWeek": newDay.getDay(),
                    "events":actions.filter((action)=> action.date === date)});
                };
                i = months.length;
            };
            
        };

        return dates;
    
    };

    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()+ 1);
    const [dates, setDates] = useState(createCalendar(currentMonth));


    useEffect(() => {
        setDates(createCalendar(currentMonth));
    },[actions]);

    console.log(actions)

    return (
        <Container>
            <ContainerHeader>
                <ContainerAnoMes>
                    <h2>{dates[0].month}</h2>
                    <h1>{dates[0].year}</h1>
                </ContainerAnoMes>
                <ContainerButtons>
                    <button onClick = {() => {setDates(createCalendar(currentMonth-1)); setCurrentMonth(currentMonth-1)}}> <FiChevronLeft /> </button>
                    <button onClick = {() => {setDates(createCalendar(currentMonth+1)); setCurrentMonth(currentMonth+1)}}>  <FiChevronRight /> </button>
                </ContainerButtons>
            </ContainerHeader>
            
            <ContainerDatas>
                <Box start={dates[0].dayWeek}/>
                {dates.map((item, index) => <CalendarCard key={index} number={item.day} events={item.events}/>)}
            </ContainerDatas>
            <MobileEvents>
                <div></div>
                <p>Clique para ver os eventos cadastrados neste dia.</p>
            </MobileEvents>
        </Container>
    );
};

export default Calendar;