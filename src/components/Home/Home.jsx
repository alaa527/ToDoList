import React from 'react'
import { useState ,useEffect} from 'react'
// import jwt_decode from 'jwt-decode'
import style from './Home.module.css'
import axios from 'axios'
function Home() {
  const [taskname,setTaskName]=useState('')
  const [description,setDescription]=useState('')
  const [tasklist,setTaskList]=useState([])

  const handledelete=(ID)=>{
    let items =JSON.parse(localStorage.getItem("AllTasks"));
      let x = items.filter((value) => value.id !== ID);
      setTaskList(x);
      localStorage.setItem("AllTasks", JSON.stringify(x));   
  } 


  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('AllTasks'));
    if (item) {
      setTaskList(item);
    }
  }, []);
  const handlesave=(e)=>{
    e.preventDefault()
    const updateLists = [
      ...tasklist,
      {   id: 1 + Math.random(),
        name:taskname,
        description: description
      }
    ];

    setTaskList(updateLists);
    localStorage.setItem("AllTasks", JSON.stringify(updateLists));

  }

  const handleName = (e)=>{
    setTaskName(e.target.value)
      }
  const handleDesc = (e)=>{
    setDescription(e.target.value)
      }
     
  return (
    <>
<section className={style.bg_section}>
  <div className='container '>
    <div className='my-3'>
      <div className='text-center'>
  <h4>What Is The Plan For Today ?</h4> <br></br>

<button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
<i className="fa-solid fa-circle-plus"></i> Create Task 
</button>
</div>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Create Task</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

        <form>
         
        <div className="my-3">
    <label htmlFor="exampleInputEmail1" className="form-label"><h6>Task Name</h6></label>
    <input onChange={handleName} name="Taskname" value={taskname} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className='my-3'>  <label htmlFor="exampleInputEmail1" className="form-label"><h6> Description</h6></label>
    <input onChange={handleDesc} name="Description" value={description} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
 </div>
    </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn " data-bs-dismiss="modal">Cancel</button>
        <button onClick={handlesave} type="button" className="btn">Create</button>
      </div>
    </div>
  </div>
</div>
    </div>
<div className='row '>
  
{
  tasklist.map((value,index)=>{
    return (
      
      <div className='col-lg-4 col-md-6 my-3' key={index}>
<div className={`border border-dark bg-light p-4 ${style.card}`}>
<div className={style.card_icons}>

<h3>{value.name}</h3>
<div>
<a href='#' onClick={() => handledelete(value.id)}><i className="fa-solid fa-trash-can  mx-2"></i></a> 
<a href='#' data-bs-toggle="modal" data-bs-target="#exampleModall" ><i className="fa-solid fa-pen-to-square"></i></a>
<div className="modal fade" id="exampleModall" tabIndex="-1" aria-labelledby="exampleModall" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModall">Update Task</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

        <form>
         
        <div className="my-3">
    <label htmlFor="exampleInputEmail2" className="form-label"><h6>Task Name</h6></label>
    <input name="updatename" type="email"  className="form-control" id="exampleInputEmail2" />
  </div>
  <div className='my-3'>  <label htmlFor="exampleInputEmail2" className="form-label"><h6> Description</h6></label>
    <input name="updatedescription" type="email" className="form-control" id="exampleInputEmail2"/>
 </div>
    </form>
  
      </div>
      <div className="modal-footer">
        <button type="button" className="btn " data-bs-dismiss="modal">Cancel</button>
        <button  type="button" className="btn">Update</button>
      </div>
    </div>
  </div>
</div>
</div>

</div>
  <p>{value.description}</p>
</div></div>
    )
  })
}
</div>
  </div>

</section>
    </>
  )
}

export default Home