import React from 'react';
import '../styles/Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form className="checkout-form">
        <label>
          Shipping Address:
          <input type="text" />
        </label>
        <label>
          Payment Info:
          <input type="text" />
        </label>
        <button className="place-order-btn">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
