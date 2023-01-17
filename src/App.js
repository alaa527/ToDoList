import './App.css';
import React  from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route  element={<ProtectedRoutes/>}>
        <Route path="/Home" element={<Home/>} exact/>
        <Route path='/' element={<Navigate to="/Home" replace />} exact/>
        </Route>

        <Route path="/Login" element={<Login/>}/>
        <Route  path="/Signup" element={<Signup/>}/>

      </Routes>
      
      </>

  
  )
}

export default App