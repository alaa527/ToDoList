import React from 'react'
import jwt_decode from 'jwt-decode'
import { Link, useLocation} from 'react-router-dom'
import style from './Navbar.module.css'
function Navbar() {
  let token=localStorage.getItem('token')
  if(token){
    var decoded=jwt_decode(token)
  }
  let location = useLocation()
  function logout(){
    localStorage.clear()
  }
  return (
    <>
 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className={`navbar-brand ${style.logo}`} href="#">TO DO LIST</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
        {location.pathname==='/Home' ?<form className="d-flex w-100 justify-content-end">
         <h5 className='mt-2'>Welcome {decoded.first_name}</h5>  
        <button className="mx-3 btn " type="submit" onClick={logout}><Link className={style.link_style} to={`/Login`}>Logout</Link></button>
        </form>: <form className="d-flex w-100 justify-content-end">
           <button className="btn" type="submit" ><Link className={style.link_style} to={`/Login`}>Login</Link></button>
       <button className="mx-3 btn " type="submit"><Link className={style.link_style} to={`/Signup`}>Register</Link></button>
       </form>
      }
       
  
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar