import React, { useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './style/calendar.css'

export default props => {
    const [date, setDate] = useState(new Date())

    const choiceData = (newDate) => {
        setDate(newDate)
    }

    return(
        <div className="calendar-container">
            <div className="calendar-title-container">
                <h2>{props.title}</h2>
            </div>
            <Calendar
                onChange={choiceData}
                value={date}
                locale="pt-BR"
            />
        </div>
    )
}
