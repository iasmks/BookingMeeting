import React,{useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import End from './End'
// import CalendarPicker from '@mui/x-date-pickers/CalendarPicker';
// import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";

// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import DateFnsUtils from "@date-io/date-fns"
// import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider,DatePicker, Calendar } from "@material-ui/pickers";
import ruLocale from "date-fns/locale/en-US";
import {Paper} from '@material-ui/core'
import { PropaneSharp } from '@mui/icons-material';
import { useEffect } from 'react';

export default function Main({textName}) {
    const [age, setAge] = useState('')
    const [textname, setTextNName] = useState('')
    
    const textHandleName = (e) => {
        setTextNName(e.target.value)
    }
  const handleChange = (event) => {
    setAge(event.target.value);
};

const [selectedDate, setSelectedDate] = useState(new Date());
// document.querySelector('b').innerHTML = selectedDate;
// const [dates, setDates] = useState(new Date())
const handleDateChange = (date) => {
  setSelectedDate(date);
  console.log("Date is: ", date);
  document.querySelector('b').innerHTML = date;
//   setDates(date)
  
};
//   const [value, setValue] = React.useState<Date | null>(new Date());
  return (
    <>
        <h1 className='text-center p-3'>Meeting Room Booking</h1>
        <div className='d-flex justify-content-center p-2 m-3' style={{background:'transparent'}}>
      <FormControl fullWidth style={{width:'400px'}}>
        <InputLabel id="demo-simple-select-label">Meeting Room</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Meeting Room"
          onChange={handleChange}
          
        >
          <MenuItem value={10}>Training Room</MenuItem>
        </Select>
        <TextField className='mt-3' value={textName} onChange={textHandleName} id="outlined-basic" label="Name" variant="outlined" placeholder='Enter Your Name' required/>
        <TextField className='mt-3' id="outlined-basic" label="Meeting Description" variant="outlined" placeholder='Enter Meeting Description' required/>
      </FormControl>

      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="year"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> */}
      </div>
      <div className='' style={{display:'flex',justifyContent:'center'}}>
      <div className='' style={{width:'300px'}}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale} style={{background:'red'}}>
          <Calendar date={selectedDate} onChange={handleDateChange} />
          <b id='show' className='text-muted size-1'></b>
      </MuiPickersUtilsProvider>
      </div>
      </div>
    <End/>
    </>
  )
}
