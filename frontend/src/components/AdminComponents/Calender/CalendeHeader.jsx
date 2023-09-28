import React from 'react'
import { format } from 'date-fns'
import { motion } from 'framer-motion'


const CalendeHeader = ({ date, onPrevMonth, onNextMonth }) => {
  return (
    <React.Fragment>
      <div className="flex w-full items-center bg-yellow-900/50 p-2 justify-between rounded-full font-Poppins">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.97 }}
          className="bg-yellow-900/70 rounded-full grid inset-0 place-content-center shadow-lg h-8 w-8 bg-white"
          onClick={onPrevMonth}
        >
          &lt;
        </motion.button>
        <div className="flex gap-2 items-center font-semibold">
          <span className="rounded-full bg-gray-300 shadow-inner  h-8 w-8 grid inset-0 place-content-center text-sm">
            {format(date, "dd")}
          </span>
          <span>{format(date, "MMMM")}</span>
          <span>{format(date, "yyyy")}</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.97 }}
          className="bg-yellow-900/70 shadow-inner-3xl rounded-full grid inset-0 place-content-center shadow-lg h-8 w-8"
          onClick={onNextMonth}
        >
          &gt;
        </motion.button>
      </div>
    </React.Fragment>
  );
}

export default CalendeHeader
