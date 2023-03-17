import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      {/* <h3>login to facebook</h3> */}
      {/* <input type="text" placeholder="email address" name="" id="" /> */}
      {/* <input type="password" placeholder="password" name="" id="" /> */}
      {/* <button type="submit">login</button>  */}
      <br></br>
      <br></br>
      <Typography variant='h3' color='primary'>Login to facebook</Typography>
      <br></br><br></br>
      <TextField label='email' variant='filled'/><br></br><br></br>
      <TextField type="password" label='password' variant='filled'/>
      <br /><br></br>
      <Button variant="outlined">Login</Button><Button variant="outlined"><Link to='/Signup' style={{color:'inherit',textDecoration:'none'}}>Signup</Link> </Button>
    </div>
  )
}

export default Login
