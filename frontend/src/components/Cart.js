import React from 'react';
import '../styles/Cart.css';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Black Jacket', price: '$200', qty: 1 },
    // More cart items...
  ];

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>Quantity: {item.qty}</p>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total: $200</p>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
