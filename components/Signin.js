import { Button, TextField } from '@mui/material';
import { useState } from 'react'
import React from 'react';
import Link from 'next/link'


const firstState = {
     "employeeId" : "",
     "password" : "",
    }

function Signin() {
     //add error toggling if any field is left blank?
     const [signInForm, setSignInForm] = useState(firstState)
     const inputChange = (e) => {
          setSignInForm({...signInForm, 
              [e.target.name] : e.target.value}
          )
     }
     const submit = (e) => {
          //send form to backend for account creation
          setSignInForm(firstState)
     }
  return <form id="signup-form">
               <div >
                    <h1 id="signup-header">Sign In</h1>
               </div>
              <TextField required className="text-field" id="outlined-basic" name="employeeId" value={signInForm.first} onChange={(e)=> inputChange(e)} label="Employee ID" variant="outlined" />
              <TextField required className="text-field" id="outlined-basic2" type="password" name="password"value={signInForm.Password} onChange={(e) => inputChange(e)} label="Password" variant="outlined" />
              <Button id="signup-button" color="success" onClick={submit}variant="contained">Sign In</Button>
              <p>Don{"'"}t have an account?  
                   <Link href="/signup">
                         <a>Sign up. </a>
                    </Link>
               </p>
          </form>;
}

export default Signin;
