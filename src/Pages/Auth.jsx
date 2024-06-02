import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginAPI, registerAPI } from '../../Services/allAPIs'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"; 
import { BsPersonFill } from 'react-icons/bs';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';



function Auth({register}) {

  const navigate=useNavigate()

  const[userData,setUserData]=useState({
    username:"",
    email:"",
    password:""

  })
  const handleRegister=async(e)=>{
    e.preventDefault()
    if(!userData.username||!userData.email||!userData.password){
      alert('please fill the form')
    }
    else{
      //api call to register
      const result = await registerAPI(userData)
      console.log(result);
      if(result.status==200){
       
        Swal.fire({
          title: 'success',
          text: 'successfully registered',
          icon: 'success',
          confirmButtonText: 'back'
          })

          setUserData({
            username:"",
            email:"",
            password:""
          })
          //to navigate to login page
          navigate('/login')
      }
      else if(result.response.status==406){
       
        Swal.fire({
          title: 'error',
          text: result.response.data,
          icon: 'error',
          confirmButtonText: 'back'
          })
      }

    }
    console.log(userData);
  }

  const handleLogin=async(e)=>{
    e.preventDefault()
    if(!userData.email||!userData.password){
      alert('please fill the form')
    }
    else{
      //api call to login
      const result = await loginAPI(userData)
      console.log(result);
      if(result.status==200){
        sessionStorage.setItem("username",result.data.existingUser.username)
        sessionStorage.setItem("token",result.data.token)
       
        Swal.fire({
          title: 'success',
          text: 'Login successfull',
          icon: 'success',
          confirmButtonText: 'back'
          })

          setUserData({
            username:"",
            email:"",
            password:""
          })
          //to navigate to login page
          navigate('/')
      }
      else if(result.response.status==404){
       
        Swal.fire({
          title: 'error',
          text: result.response.data,
          icon: 'error',
          confirmButtonText: 'back'
          })
      }

    }
    console.log(userData);
  }
 
  return (

    
    <div>

<MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/' className='text-black fw-bold'>
          <BsPersonFill className='fs-3 text-black mx-3' />
          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '24px' }}>Project Fair</span>
        </MDBNavbarBrand>
       
      </MDBContainer>
    </MDBNavbar>
    
      <div className="row" style={{backgroundColor:"#003140"}}>
        <div className="col-lg-6">
          <img src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=6c09b952ctryfyzr713c2eqb0kbfm1z62ylbe4v8xi4kbwcs&ep=v1_gifs_search&rid=giphy.gif&ct=g"style={{width:'100%'}} alt="" />
        </div>
        <div className="col-lg-6">
          <form className='shadow bg-light m-5 p-1'>
            <h2 className='text-center text-black mt-3'>Project Fair</h2>
           <h4 className='text-center text-black'>
           {
              register? 'Register Here...':'Login Here...'
            }
           </h4>

            <div className='mx-1 px-5 mt-3'>
              {
                register&&
                // <input onChange={e=>setUserData({...userData,username:e.target.value})}value={userData.username} type="text" placeholder='Username' className='form-control mb-2'/>
                <input onChange={e => setUserData({ ...userData, username: e.target.value })} value={userData.username} type="text" placeholder='Username' className='form-control mb-2' />
              }
                <input onChange={e => setUserData({ ...userData, email: e.target.value})} value={userData.email} type="email" placeholder='email' className='form-control mb-2'/>
                <input onChange={e => setUserData({ ...userData, password :e.target.value})} value={userData.password} type="password" placeholder='password'className='form-control mb-2' />
            </div>
            <div>
              {
                register ? 
                <div className='text-center m-4'>
                  <button onClick={handleRegister} className='btn btn-dark m-2'>Register</button>
                  <p className='text-black'>Already registred?  <Link to={'/login'}>Login here...</Link></p>
                </div>:
                <div className='text-center m-4'>
                  <button onClick={handleLogin} className='btn btn-dark m-2'>Login</button>
                  <p className='text-black'>New to here? <Link to={'/register'}>Register here...</Link></p>
                </div>
              }
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth