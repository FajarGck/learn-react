import React, { useState } from 'react'
import Product from './Product'
import Form from './Form'
import './style/style.css'

function ListProducts() {
    const [ products, setProducts ] = useState([
        { name: "Cocacola", price: 10, location: "Bali"},
        { name: "Pepsi", price: 10, location: "Batam"},
        { name: "Fanta", price: 10, location: "Surabaya"},
    ])


    const addProduct = (newProduct) => {
        setProducts([...products, newProduct])
    }
    
  return (
    <div className='list-product'> 
    <Form addProduct={addProduct}/>
        {
            products.map((product) => (
                <div className="card-product" key={product.name}>
                <Product 
                name={product.name}
                price={product.price}
                location={product.location}
                />
            </div>
            ))
        }
    </div>
  )
}

export default ListProducts;