import axios from 'axios';
import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Addproduct = () => {
  // Declaring state variables
const [product_name,setProductName] = useState('');
const [product_description,setProductDescription] = useState('');
const [product_cost,setProductCost] = useState('');
const [product_photo,setProductPhoto] = useState('');

// Status messages
const[loading,setLoading] = useState("")
const [error,setError] = useState("")
const [success,setSuccess] = useState("")

// function to add product
// async makes sure values in front end and back end are the same and the data added in the backend
const handleSubmit = async (e)=>{
e.preventDefault();
setLoading("Please wait ...");

try{
// retrieve product details
const formData = new FormData();
    formData.append("product_name",product_name);
    formData.append("product_description",product_description);
    formData.append("product_cost",product_cost)
    formData.append("product_photo",product_photo)

// posting data to base url(api)
// await-waiting for the response to come back from the backend
const response = await axios.post("https://philloryx.alwaysdata.net/api/add_product",formData)
setLoading("")
setSuccess(response.data.success)

} catch (error){
setError(error.message)
}

}
 
  return (

 <div className="container-fluid" id='form-image'>
  <div className="row justify-content-center"> 
     <nav>
      <Link to="/" className='btn btn-dark' id='product'>GET ALL PRODUCTS</Link>
    </nav>

    {error}
    {success}
    {loading}


      <h2>Add Product</h2>
        <div className='col-md-6 card shadow p-4 m-2'>
      <form onSubmit={handleSubmit}>

          <input 
           type="text"
           placeholder="Product Name "
           className='form-control'
           value={product_name}
          onChange={(e)=>setProductName(e.target.value)}
          required
           /> <br />

          <input 
           type="number"
           placeholder="Product Cost " 
           className='form-control' 
           value={product_cost}
           onChange={(e)=>setProductCost(e.target.value)}
           required
           /> <br />     

          <textarea
          placeholder="Product description" 
          className='form-control'
          value={product_description}
          onChange={(e)=>setProductDescription(e.target.value)}
          required
          /> <br />

          <input 
          type="file" 
          className='btn btn-warning' 
          accept = "image/*"
          placeholder="Enter product photo " 
          onChange={(e)=>setProductPhoto(e.target.files[0])}
          required
          /> <br /> <br />

         <input
         type="submit"
         value="Addproduct"
         className='btn btn-danger w-50'
          />
      </form>
    </div>
  </div>
  <Footer/>
 </div>
  )
}
export default Addproduct