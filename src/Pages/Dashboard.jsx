import React, { useEffect, useState } from 'react'
import MyProject from '../Components/MyProject'
import Profile from '../Components/Profile'
import { Link } from "react-router-dom";
import Header from '../Components/Header';

function Dashboard() {
  const[username,setUsername]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("username")){
      setUsername(sessionStorage.getItem("username"))
    }else{
      setUsername("")
    }
  })
  return (
    <div style={{backgroundColor:"rgba(0,49,64,255)"}}>
      <Header/>
      <div className="row">
        <h2 className='text-center mt-5'>Welcome <span className='text-white'>{username}</span></h2>
        <div className="col-lg-6">
          <MyProject/>
        </div>
        <div className="col-lg-6">
          <Profile/>
        </div>
      </div>
      <div className='text-center  p-5'>
       <Link to={'/projects'}>
       <button className='btn btn-dark'>view all users projects</button>
       </Link>
      </div>
      
    </div>
  )
}

export default Dashboard