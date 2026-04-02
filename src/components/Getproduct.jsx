import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

const Getproduct = () => {

  // State
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")

  // Navigation
  const navigate = useNavigate()

  // Image base URL
  const img_url = "https://philloryx.alwaysdata.net/static/images/"

  // Fetch products
  const getProducts = async () => {
    setLoading("Please wait as we retrieve products...")
    try {
      const response = await axios.get(
        "http://philloryx.alwaysdata.net/api/get_product_details"
      )
      setProducts(response.data)
      setLoading("")
    } catch (error) {
      setError(error.message)
      setLoading("")
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  // Search filter
  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div >
      
      {/* Search Bar */}
     <div className='my-4 d-flex justify-content-center'>
        <input
      type="text"
      placeholder="🔍 Search for products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-bar"
  />
  </div>

      {/* Status messages */}
      <p className='text-center text-info'>{loading}</p>
      <p className='text-center text-danger'>{error}</p>

      {/* Products Grid */}
      <div className='row'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            
            <div
              className='col-md-4 col-sm-6 col-12 d-flex'
              key={product.id}
            >
              <div className='card shadow mt-3 p-3 w-100'>
                
                {/* Image */}
                <img
                  src={img_url + product.product_photo}
                  className='product_img'
                  alt={product.product_name}
                />

                {/* Details */}
                <div className='card-body'>
                  <h5>{product.product_name}</h5>
                  <p className='text-muted'>
                    {product.product_description}
                  </p>
                  <b className='text-warning'>
                    Ksh {product.product_cost}
                  </b>

                  <button
                    className='btn btn-dark mt-3 w-100'
                    onClick={() =>
                      navigate("/makepayment", { state: { product } })
                    }
                  >
                    Purchase now
                  </button>
                </div>

              </div>
            </div>

          ))
        ) : (
          <p className='text-center'>No product found</p>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Getproduct