import React, { useState } from 'react'
import Product from './Product'
import Form from './Form'
import './style/style.css'

function ListProducts() {
    const [ products, setProducts ] = useState([])


    const addProduct = (newProduct) => {
        setProducts([...products, newProduct])
    }
    
  return (
    <React.Fragment> 
    <Form addProduct={addProduct}/>
    <div className="wrapper">
    <h2>List Product</h2>
        {
            products.map((product, index) => (
                <div className='list-product' 
                key={index}>
                <Product 
                name={product.name}
                price={product.price}
                location={product.location}
                />
            </div>
            ))
        }
    </div>
    </React.Fragment>
  )
}

export default ListProducts;