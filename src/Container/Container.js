import React from 'react';
import Order from '../Order/Order';

const Container = ({orders, deleteItem}) => {
    const displayOrders = orders.map(order => {
        return (
            <Order 
            id={order.id}
            key={order.id}
            img={order.img}
            name={order.name}
            description={order.description}
            price={order.price}
            deleteItem={deleteItem}
            />
        )
    })
    return (
        <div className="Container">
            {displayOrders}
        </div>
    )
}

export default Container;