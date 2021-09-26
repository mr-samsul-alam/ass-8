import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    const { cart } = props || {}
    const totalReducer = (previousValue, currentValue) => previousValue + currentValue.honorarium
    const total = cart.reduce(totalReducer, 0)
    return (
        <div>
            <h3><i className="fas fa-user-check"></i> Person Added : {cart.length}</h3>
            <h2>Total Cost: {total}</h2>
            <h2 className="text-warning"> Selected Person list</h2>
            <ul> 
            {
                cart.map(person => <li><b>{person.name} </b></li>)
            }
            </ul>
        </div>
    );
};

export default Cart;