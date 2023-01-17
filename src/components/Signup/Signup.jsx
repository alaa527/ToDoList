import React from 'react'
import axios from 'axios'
import { useNavigate  } from "react-router-dom";
import style from './Signup.module.css'
import { useState } from 'react';

function Signup() {
const[first_name,setFirstname]=useState('')
const[last_name,setLastname]=useState('')
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[error,setError]=useState('')
const[waiting,setWaiting]=useState(false)
const navigate  = useNavigate ();
const handleFirstname = (e)=>{
  setFirstname(e.target.value)
    }
    const handleLastname = (e)=>{
      setLastname(e.target.value)
    }
const handleEmail = (e)=>{
setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
setPassword(e.target.value)
  }
async function sendData(e){
e.preventDefault()
setWaiting(true)
let {data}= await axios.post("https://sticky-note-fe.vercel.app/signup",{first_name,last_name,email,password})
if(data.message==="success"){
  navigate("/Login");

}
else{
  setError("email already registered")
  setWaiting(false)
}
// console.log(data)
  }
  return (
    <>
    <div className="container  d-flex align-items-center justify-content-center " style={{height:"550px"}}>
        <div className="p-3 border border-dark">
        
    <form onSubmit={sendData} className={style.Rform_style}>
    <i className="fa-solid fa-user-plus d-flex justify-content-center"></i>
    <div className="mb-1">
    <label htmlFor="exampleInputfirst_name1" className="form-label">First Name</label>
    <input onChange={handleFirstname} value={first_name} name="first_name"  className="form-control" id="exampleInputFirstname1"/>
  
  </div>
  <div className="mb-1">
    <label htmlFor="exampleInputlast_name1" className="form-label">Last Name</label>
    <input onChange={handleLastname} value={last_name} name="last_name"  className="form-control" id="exampleInputLastname1"/>
  </div>
  <div className="mb-1">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={handleEmail} value={email} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-1">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={handlePassword} value={password} name="password" type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

{error&&  <div className='alert alert-danger text-center'>{error} </div>}
 
  <button type="submit" className={`btn ${style.Register_btn}`}>{waiting?'Waiting....':'Register'}</button>
</form>
</div></div>
    </>
  )
}

export default Signup