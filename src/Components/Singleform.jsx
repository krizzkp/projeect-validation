import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Singleform = () => {
    var[input,setinput]= useState({
        value1:'',
       value2:'',
       value3:''
    })
    const inputhandler = (e)=>{
        const {name,value} = e.target
        setinput({...input,[name]:value})
    }
  return (
    <div>
        <Typography>{input.value1}</Typography>
      <TextField label='first name'name='value1' value={input.value1}
      onChange={inputhandler}/>
      <br></br>

      <Typography>{input.value2}</Typography>
      <TextField label='last'name='value2'value={input.value2}
        onChange={inputhandler}/>
        <br></br>
       <Typography>{input.value3}</Typography>
        <TextField label='address'name='value3'value={input.value3}
        onChange={inputhandler}/>
    </div>
  )
}

export default Singleform
