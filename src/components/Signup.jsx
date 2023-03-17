import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <Typography variant='h5' color='primary'>Create an account</Typography>
      <TextField  label="first name" variant='filled' fullwidth ></TextField>
      <t></t><TextField label="surname" variant='filled' ></TextField><br></br><br></br>
      <TextField id="me" label="mobile no or email address" variant='filled' ></TextField>
      <br /><br /><TextField  type='password' label="password" variant='filled' ></TextField>
      <br /><br></br>
      <Button variant="outlined">submit</Button>


    </div>
  )
}

export default Signup
