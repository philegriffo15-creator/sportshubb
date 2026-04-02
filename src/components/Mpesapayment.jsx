import React, { useEffect, useState } from 'react'
import image from '../logo.svg'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const Mpesapayment = () => {

  // declaring state varibles
  const {product}=useLocation().state || {};
  const [phone,setPhone]= useState("")
  const [messages,setMessages] = useState("")
  const [error,setError] = useState("")

   // image url
  const img_url = "https://philloryx.alwaysdata.net/static/images/"



  // function for mpesa payment]
  const handleSubmit = async(e)=>{
    e.preventDefault()
  setMessages("Please wait as we process transaction...")
try{
// retrieving user and product details for submission
const formData = new FormData()
formData.append("phone",phone)
formData.append("amount",product.product_cost)

// adding base url for Mpesa payment request
const response = await axios.post("https://philloryx.alwaysdata.net/api/mpesa_payment",formData)
setMessages(response.data.message)
} catch (error){
  setError(error.message)

}
  }

  return (
    <div className='row justify-content-center' id='form-image'>
      <h3>LIPA NA MPESA</h3>
      {messages}
      {error}

      {/* Make payment body */}
      <div className='col-md-6 card shadow card-margin mt-4 p-3'>
        <img src={img_url + product.product_photo} alt={product.product_photo} />
        <p>Product Name:{product.product_name}</p> 
        <p className='text-warning'>Product Cost:{product.product_cost}</p>
        {/* mpesa payment form */}
        <form action="" onSubmit={handleSubmit}> 
          <label>
            Phone Number
          </label>
          <input 
          type="tel" 
          placeholder='enter phone number'
          className='form-control'
          onChange={(e)=>setPhone(e.target.value)}
          /> <br />

          <button 
          className='btn btn-success'>Make Payment</button> <br />

        </form>
      </div>
    </div>
  )
}

export default Mpesapayment