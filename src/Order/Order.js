import React from 'react'
import './Order.css'

const Order = ({id, img, name, description, price, deleteItem}) => {
    return (
        <div className="Order">
            <img src={img} alt="ordered item"/>
            <div className="nameDes">
            <h2>{name}</h2>
            <p>{description}</p>
            </div>
            <div className="priceButton">
            <h2>{price}</h2>
            <button onClick={() => deleteItem(id)}>Remove From History</button>
            </div>
        </div>
    )
}

export default Order;