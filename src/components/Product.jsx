import React from 'react'
import './style/style.css'

function Product({ name, price, location}) {
  return (
    <div className='card-product'>
        <img src="src/assets/dummy.jpg" alt="dummy" />
        <h4>{name}</h4>
        <h3>${price}</h3>
        <h5>{location}</h5>
    </div>
  )
}

export default Product;