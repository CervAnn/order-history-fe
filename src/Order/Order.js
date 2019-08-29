import React from 'react'
import './Order.css'

const Order = ({id, image, name, description, price}) => {
    return (
        <div className="Order">
            <img src={image} alt="ordered item"/>
            <h2>{name}</h2>
            <p>{description}</p>
            <h2>{price}</h2>
        </div>
    )
}

export default Order;