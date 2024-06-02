import React, { useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './style/calendar.css'

export default ({ title, selectedDate, onDateChange }) => {
    const [date, setDate] = useState(new Date())

    const choiceData = (newDate) => {
        setDate(newDate)
    }

    return(
        <div className="calendar-container">
            <div className="calendar-title-container">
                <h2>{title}</h2>
            </div>
            <Calendar
                onChange={onDateChange}
                value={selectedDate}
                locale="pt-BR"
            />
        </div>
    )
}
