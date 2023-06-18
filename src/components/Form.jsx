import React, { useState } from 'react'
import './style/style.css'


function Form( { addProduct }) {
    const [ newProduct, setNewProduct ] = useState({
        name: '',
        price: 0,
        location: ''
    })

    const handlerChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        })
    }

  const handlerSubmit = (e) => {
      addProduct(newProduct)
      e.preventDefault()
      handlerReset()
  }

  const handlerReset = () => {
    setNewProduct({
        name: '',
        price: 0,
        location: ''
    })
  }


  return (
    <form onSubmit={handlerSubmit}>
        <label>Name:
            <input 
            type="text"
            name='name'
            value={newProduct.name}
            onChange={handlerChange}
            />
        </label>
        <label>Price:
            <input 
            type="number"
            name='price'
            value={newProduct.price}
            onChange={handlerChange}
            />
        </label>
        <label>Location:
            <input 
            type="text"
            name='location'
            value={newProduct.location}
            onChange={handlerChange}
            />
        </label>
        <div className="btn">
        <button id='submit' type='submit'>Submit</button>
        <button id='reset' type='reset' onClick={handlerReset}>Reset</button>
        </div>
    </form>
  )
}

export default Form