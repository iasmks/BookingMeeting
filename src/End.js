import React from 'react'
// import { Button } from 'react-bootstrap'

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'

export default function End({}) {
    const [room,setRoom] = React.useState(null)
    const [click,setClick] = React.useState(null)
    // const [input,setInput] = React.useState('')

    const handle = (e) => {
        // let changeName = e.target.value
        alert(`Your Slot is Booked Timming This :- ${room}`)
    }
    return (
    <>
        <h3 className='text-center mt-5 text-muted'>Please select your preferred slot</h3>
        <div className='grid d-flex justify-content-center mt-4'>
        
<Button className='me-4' variant={room==='10:00 AM'?"contained":'outlined'} onClick={()=>setRoom('10:00 AM')}>10:00 AM</Button>
<Button className='me-4' variant={room==='10:30 AM'?"contained":'outlined'} onClick={()=>setRoom('10:30 AM')}>10:30 AM</Button>
<Button className='me-4' variant={room==='11:00 AM'?"contained":'outlined'} onClick={()=>setRoom('11:00 AM')}>11:00 AM</Button>
<Button className='me-4' variant={room==='11:30 AM'?"contained":'outlined'} onClick={()=>setRoom('11:30 AM')}>11:30 AM</Button>
<Button className='me-4' variant={room==='12:00 PM'?"contained":'outlined'} onClick={()=>setRoom('12:00 PM')}>12:00 PM</Button>
<Button className='me-4' variant={room==='12:30 PM'?"contained":'outlined'} onClick={()=>setRoom('12:30 PM')}>12:30 PM</Button>
        </div>
        <div className='grid d-flex justify-content-center mt-4'>
        
<Button className='me-4' variant={room==='01:00 PM'?"contained":'outlined'} onClick={()=>setRoom('01:00 PM')}>01:00 PM</Button>
<Button className='me-4' variant={room==='01:30 PM'?"contained":'outlined'} onClick={()=>setRoom('01:30 PM')}>01:30 PM</Button>
<Button className='me-4' variant={room==='02:00 PM'?"contained":'outlined'} onClick={()=>setRoom('02:00 PM')}>02:00 PM</Button>
<Button className='me-4' variant={room==='02:30 PM'?"contained":'outlined'} onClick={()=>setRoom('02:30 PM')}>02:30 PM</Button>
<Button className='me-4' variant={room==='03:00 PM'?"contained":'outlined'} onClick={()=>setRoom('03:00 PM')}>03:00 PM</Button>
<Button className='me-4' variant={room==='03:30 PM'?"contained":'outlined'} onClick={()=>setRoom('03:30 PM')}>03:30 PM</Button>
        </div>
        <div className='grid d-flex justify-content-center mt-4'>
        
<Button className='me-4' variant={room==='04:00 PM'?"contained":'outlined'} onClick={()=>setRoom('04:00 PM')}>04:00 PM</Button>
<Button className='me-4' variant={room==='04:30 PM'?"contained":'outlined'} onClick={()=>setRoom('04:30 PM')}>04:30 PM</Button>
<Button className='me-4' variant={room==='05:00 PM'?"contained":'outlined'} onClick={()=>setRoom('05:00 PM')}>05:00 PM</Button>
<Button className='me-4' variant={room==='05:30 PM'?"contained":'outlined'} onClick={()=>setRoom('05:30 PM')}>05:30 PM</Button>
<Button className='me-4' variant={room==='06:00 PM'?"contained":'outlined'} onClick={()=>setRoom('06:00 PM')}>06:00 PM</Button>
<Button className='me-4' variant={room==='06:30 PM'?"contained":'outlined'} onClick={()=>setRoom('06:30 PM')}>06:30 PM</Button>
        </div>
        <div className='grid d-flex justify-content-center mt-4'>
        
<Button className='me-4' variant={room==='07:00 PM'?"contained":'outlined'} onClick={()=>setRoom('07:00 PM')}>07:00 PM</Button>
        </div>
        <div className='d-flex justify-content-center p-2 m-3' >
        {
            room ? <Button variant='contained' onClick={handle}>BOOK APPOINTMENT</Button> : <Button variant='contained' style={{background:'gray'}}>BOOK APPOINTMENT</Button>
        }
        </div>



        {/* <input value={input} onChange={() => setInput()}/> <button onClick={handle}>Click</button> */}
    </>
  )
}
