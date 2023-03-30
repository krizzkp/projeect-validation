import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Sampleform = () => {
    var[input,setinput] = useState();
    const inputhandle = (Event)=>{
        setinput(Event.target.value)
        console.log(input)
    }
    var[input2,setinput2]=useState();
        const inputhandle2 = (Event)=>{
          setinput(Event.target.value)
        }
  return (
    <div>
       <Typography>{input}</Typography>
      <TextField variant='outlined' label='username' onChange={inputhandle}/>
      <br></br>
<br></br>
<Typography>{input2}</Typography>
      <TextField variant='outlined' label='lastname' onChange={inputhandle2}/> 
      <Button variant='contained'>login</Button>
    </div>
  )
}

export default Sampleform
