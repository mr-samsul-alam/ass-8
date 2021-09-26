import React from 'react';


const Cart = (props) => {
   
    const { cart } = props || {}
     

    const totalReducer = (previousValue, currentValue) => previousValue + currentValue.honorarium
    const total = cart.reduce(totalReducer, 0)


    return (
        <div>
            <h3><i className="fas fa-user-check"></i> Person Added : {cart.length}</h3>
            <h2>Total Cost: {total}</h2>
        </div>
    );
};

export default Cart;