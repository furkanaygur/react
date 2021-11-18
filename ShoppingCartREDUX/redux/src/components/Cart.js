import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { removeItem, increase, decrease } from '../actions/index';

const Cart = (probs) => {
  return (
    <div className="cart">
      {probs.cart.map((book) => (
        <CartItem
          key={book.id}
          book={book}
          removeItem={probs.removeItem}
          increase={probs.increase}
          decrease={probs.decrease}
        />
      ))}
    </div>
  );
};

const mapStateToProbs = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProbs, { removeItem, increase, decrease })(
  Cart
);
