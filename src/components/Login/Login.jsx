import React from 'react'
import axios from 'axios'
import { useNavigate  } from "react-router-dom";
import { useState } from 'react';
import style from "./Login.module.css"
function Login() {
  const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[waiting,setWaiting]=useState(false)
const[error,setError]=useState('')
const navigate  = useNavigate ();
const handleEmail = (e)=>{
setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
setPassword(e.target.value)
  }
async function sendData(e){
  e.preventDefault()
  setWaiting(true)
  let {data}= await axios.post("https://sticky-note-fe.vercel.app/signin",{email,password})
if(data.message==="success"){
  localStorage.setItem('token',data.token)
  navigate("/Home");
}
else{
  setError(data.message)
  setWaiting(false)
  
}

  }
  return (
    <>
    <div className="container d-flex align-items-center justify-content-center " style={{height:"550px"}}>
        <div className="p-3 border border-dark">
    <form onSubmit={sendData} className={style.Lform_style}>
    <i className="fa-solid fa-user d-flex justify-content-center"></i>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={handleEmail} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={handlePassword} value={password} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  {error&&  <div className='alert alert-danger text-center'>{error} </div>}
  <button type="submit" className={`btn ${style.Login_btn}`}>{waiting?'Waiting....':'Login'}</button>
</form>
</div></div>
    </>  
  )
}

export default Login