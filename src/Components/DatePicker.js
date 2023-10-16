import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"

function DatePicker() {

    const [date,setDate] = useState(null)

    const handleDateChange=(date)=>{
        setDate(date)
    }

  return (
    <>
    <h2>DatePicker</h2>
    
    <p>CLICK TO CHOOSE DATE</p>
    <ReactDatePicker
    selected={date}
    onChange={handleDateChange}
    dateFormat="dd/MM/yyyy ; hh:mm"
    showTimeSelect
    timeIntervals={30}
    timeFormat='hh:mm'
    
    />

    </>
  )
}

export default DatePicker