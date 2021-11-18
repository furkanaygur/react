import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="cart">
      {cart.map((book) => (
        <CartItem
          key={book.id}
          book={book}
          // removeItem={probs.removeItem}
          // increase={probs.increase}
          // decrease={probs.decrease}
        />
      ))}
    </div>
  );
};

export default Cart;
