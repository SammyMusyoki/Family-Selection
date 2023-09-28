import React, { useState } from 'react'
import CalendeHeader from './CalendeHeader'
import CalenderTable from './CalenderTable'

const Calender = () => {
    const [date, setDate] = useState(new Date());

    const handlePrevMonth = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() -1, 1);
        setDate(newDate)
    }
    const handleNextMonth = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() +1, 1);
        setDate(newDate)
    }
  return (
    <React.Fragment>
        <div className='max-w-lg border p-2 rounded-lg shadow'>
            <CalendeHeader 
            date={date} 
            onPrevMonth = {handlePrevMonth}
            onNextMonth = {handleNextMonth}
            />
            <CalenderTable date = {date}/>
        </div>
    </React.Fragment>
  )
}

export default Calender
