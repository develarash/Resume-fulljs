import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import {loginValidation} from "../../validations/loginValidation"
import { useNavigate } from "react-router-dom";

function Login () {
  const [errorsYup, setErrorsYup] = useState([]);
  const [singleError, setsingleError] = useState([]);

  const navigation = useNavigate();

const [loginform,setLoginform]=useState({
  email: "",
  password: "",
})


  const handlechange=(e)=>{
    setLoginform({
      ...loginform,
      [e.target.name]: e.target.value,
      
    });
  }

  const handlesubmit= async(e)=>{
    e.preventDefault();

    try{
     await  loginValidation.validate(loginform, { abortEarly: false });
      axios.post("http://localhost:20201/api/user/login",loginform)
     .then((result) => {
      setLoginform({
        email:" ",
        password:" "
       })      }).then(()=>{
        
        setErrorsYup(null);
        setsingleError("")      
       }).catch((err) => {
        if (err.response.status === 404) {
          console.log(err.response.data.message)
          setErrorsYup([]);

          setsingleError(err.response.data.message)
          
        }
      }).finally(()=>{
        
        setErrorsYup([]);

      })
     

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
      <label htmlFor="email">email</label>
      <input   value={loginform.email} onChange={handlechange} type="text" name="email" id="" />
    </div>
    <div>
      <label htmlFor="password">password</label>
      <input    value={loginform.password} onChange={handlechange} type="text" name="password" id="" />
    </div><button>button</button>
  </form>
</div>

  {
errorsYup.map((prg,index) => (
            <p key={index} className="">*{prg.message}</p>
          ))}
          <p>{singleError}</p>
    </div>
  )
}

export default Login