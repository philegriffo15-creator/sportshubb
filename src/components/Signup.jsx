import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Signup = () => {
// Declaring state variabbles
const[username,setUsername] = useState("")
const[email,setEmail] = useState("")
const[phone,setPhone] = useState("")
const[password,setPassword] = useState("")

// Status messages
const[loading,setLoading] =useState("")
const[error,setError] =useState("")
const[success,setSuccess] =useState("")


// function signup
const submitSignupDetails =async(e)=>{
  e.preventDefault()
  setLoading("Please wait ...")
  try{
    const formData = new FormData();
    formData.append("username",username);
    formData.append("email",email);
    formData.append("phone",phone)
    formData.append("password",password)

    // Adding base url
    const response = await axios.post("https://philloryx.alwaysdata.net/api/signup",formData);
    setSuccess(response.data.success)
    setLoading("")
    
    // reset values
    setPhone("")
    setUsername("")
    setEmail("")
    setPassword("")
    
  } catch (error) {
    setError(error.message)

  }
}

  return (
    <div className='container-fluid' id='form-image'>
  <div className='row justify-content-center'>
    <div className='col-md-6 card shadow m-2 p-4'> <br />
    <h1 id='header'>Signup</h1>
    {/* binding variables */}
{loading} <br />
{error} <br />
{success} <br />
    
    {/* signup form */}
    <form id='signup' onSubmit={submitSignupDetails}>
      <input type="text" placeholder='Enter Username' className='form-control' onChange={(e)=>setUsername(e.target.value)}/><br />
      <input type="email" placeholder='Enter email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/><br />
      <input type="tel" placeholder='Phone number' className='form-control' onChange={(e)=>setPhone(e.target.value)}/><br />
      <input type="password" placeholder='Enter Password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/><br />

  <div id='agree-box'>
      <input type="checkbox" />
     <label>I Agree to the Terms and Conditions</label>
      </div> <br />

      <input type="submit" value="Sign up" className='btn btn-success w-50'/><br />
      {/* Incase someone has an account */}
    
      <Link to='/signin'>Already have an account? Signin</Link> <br />
     
    </form>
    </div>
  </div> <br />
  <Footer/>
  </div>
  )
}

export default Signup


