import React from 'react'

function Product(props) {
  return (
    <div>
        <img src="https://placeholder.com/100" alt="dummy" />
        <h4>{props.name}</h4>
        <h3>${props.price}</h3>
        <h5>{props.location}</h5>
    </div>
  )
}

export default Product