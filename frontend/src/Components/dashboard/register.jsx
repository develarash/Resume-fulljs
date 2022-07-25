import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import {registerValidation} from "../../validations/registerValidation"

function Register () {
  const [errorsYup, setErrorsYup] = useState([]);

const [registerdata,setRegisterdata]=useState({
    username: "",
    email: "",
  password: "",
})


  const handlechange=(e)=>{
    setRegisterdata({
      ...registerdata,
      [e.target.name]: e.target.value,
      
    });
  }

  const handlesubmit= async(e)=>{
    e.preventDefault();

    try{
     await  registerValidation.validate(registerdata, { abortEarly: false });
      axios.post("http://localhost:20201/api/user",registerdata)
      setRegisterdata({
        username:" ",
       email:" ",
       password:" "
      })
      setErrorsYup(null);

    } catch(e){
    // console.log(e);
    console.log(e.inner);
    setErrorsYup(e.inner);

  }
     
  }
 
  return (
    <div>
      <h1>Login</h1>


<div className='formdivInsertInput'>
  <form onSubmit={handlesubmit}>
  <div>
      <label htmlFor="username">username</label>
      <input   value={registerdata.username} onChange={handlechange} type="text" name="username" id="username" />
    </div>
    <div>
      <label htmlFor="email">email</label>
      <input   value={registerdata.email} onChange={handlechange} type="text" name="email" id="email" />
    </div>
    <div>
      <label htmlFor="password">password</label>
      <input    value={registerdata.password} onChange={handlechange} type="text" name="password" id="password" />
    </div><button>button</button>
  </form>
</div>
{errorsYup==null ?(
    null
):(errorsYup.map((prg,index) => (
            <p key={index} className="">*{prg.message}</p>
          )))
}
    </div>
  )
}

export default Register