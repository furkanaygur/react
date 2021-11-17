import React from 'react';
import { Context, useContext } from '../context/index';
import CartItem from './CartItem';
const Cart = () => {
  const { state } = useContext(Context);

  return (
    <div className="cart">
      {state.cart.map((book) => (
        <CartItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Cart;
