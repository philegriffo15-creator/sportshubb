import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate,} from 'react-router-dom'
import Footer from './Footer'

const Signin = () => {
  // Declaring state variables
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
// status messages
const [loading,setLoading] =useState("")
const [error,setError] =useState("")
const [success,setSuccess] =useState("")

// navigation
const navigate = useNavigate()


// function sign in
const handleSignin =async(e) =>{
  // e.preventDefault  cancels the event if it is cancelable
  e.preventDefault()
  setLoading("Please wait ...")
  try{
// Retrieving user details
const formData = new FormData();
formData.append("email",email)
formData.append("password",password)

// Adding base url
const response = await axios.post("https://philloryx.alwaysdata.net/api/signin",formData)
if (response.data.user){
  setSuccess(response.data.message)
  setLoading("")
  localStorage.setItem("user",JSON.stringify(response.data.user))
  navigate("/")
}else{
  setError(response.data.message)
}
  } catch(error) {
    setError(error.message)
    setLoading(" ")

  }
}


  return (
   <div className="container-fluid" id='form-image'>
     <div className='row justify-content-center'>
      <div className='col-md-6 card shadow m-2 p-4'>
        <h1 >Signin</h1>

        {/* bind */}
        {email} <br />
        {password} <br />
        {loading} <br />
        {error} <br />
        {success} <br />
    

        <form action="" onSubmit={handleSignin}>
          <input type="email" placeholder='Enter email'className='form-control' onChange={(e)=>setEmail(e.target.value)}/> <br />
          <input type="password" placeholder='Enter password'className='form-control' onChange={(e)=>setPassword(e.target.value)}/> <br />
          <input type="submit" value="Signin" className='btn btn-info w-50' /> <br />

          <Link to='/signup'>Don't have an account? Signup</Link>
      </form>
      </div>
    </div> <br />
    <Footer/>
   </div>
  )
}

export default Signin