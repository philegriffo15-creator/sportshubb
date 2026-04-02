import React from 'react'
import sneakerrs from '../sneakerrs c.webp'
import sportyyy from '../sportyyy.webp'
import sneeeakers from '../sneeeakers.webp'
import sportifff from '../sportifff.webp'

const Carousel = () => {
  return (
    <div className="container-fluid" id="form-image">

      <div className="col-md-12">

        {/* Carousel */}
        <div
          id="mycarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >

          {/* Images */}
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src={sneakerrs} alt="Sneakers" className="carousel-img d-block w-100" />
            </div>

            <div className="carousel-item">
              <img src={sportifff} alt="Sport shoes" className="carousel-img d-block w-100" />
            </div>

            <div className="carousel-item">
              <img src={sneeeakers} alt="Sneakers style" className="carousel-img d-block w-100" />
            </div>

            <div className="carousel-item">
              <img src={sportyyy} alt="Sport wear" className="carousel-img d-block w-100" />
            </div>

          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#mycarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon bg-danger"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#mycarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon bg-danger"></span>
          </button>

        </div>

      </div>
    </div>
  )
}

export default Carousel