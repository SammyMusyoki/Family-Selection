import React from 'react'
import { startOfMonth, startOfWeek, endOfMonth, endOfWeek, addDays} from 'date-fns';
import CalenderDay from './CalenderDay';

const CalenderTable = ( { date } ) => {


    const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthStart = startOfMonth(date)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)
    const rows = []

    let days = []
    let day = startDate

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            days.push(day)
            day = addDays(day, 1)
        }
        rows.push({ day, days})
        days = []
    }
  return (
    <React.Fragment>
      <table className='w-full mt-4 bg-yellow-900/20 rounded-lg overflow-hidden'>
        <thead className=''>
            <tr className=''>
                {
                    WEEK_DAYS.map((weekDay) => (
                        <th className='border font-semibold w-8 p-2'>{weekDay}</th>
                    ))
                }
            </tr>
        </thead>
        <tbody className='bg-yellow-900/50'>
            {
                rows?.map((row) =>(
                    <CalenderDay day={row.day} date={date} days={row.days} monthStart={monthStart} />
                ))
            }
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default CalenderTable
