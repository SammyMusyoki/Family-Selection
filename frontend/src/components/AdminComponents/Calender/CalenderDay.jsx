import React from 'react'
import { format } from "date-fns";

const CalenderDay = ({ day, days}) => {
      console.log(new Date().getDate().toLocaleString());
  return (
    <React.Fragment>
      <tr key={day} className=''>
        {
            days.map((d) => (
                <td  className='text-center p-2 '>
                  <div key={d}
                  className='font-semibold h-9 w-9 grid place-content-center'><span className='text-sm'>{format(d, 'd')}</span></div>
                </td>
            ))
        }
      </tr>
    </React.Fragment>
  )
}

export default CalenderDay
