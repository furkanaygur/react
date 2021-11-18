import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { addToCart } from '../actions/index';

const List = (probs) => {
  return (
    <div className="list">
      {probs.books.map((book) => (
        <ListItem
          key={book.id}
          book={book}
          cart={probs.cart}
          addToCart={probs.addToCart}
        />
      ))}
    </div>
  );
};

const mapStateToProbs = (state) => {
  return {
    books: state.books,
    cart: state.cart,
  };
};

export default connect(mapStateToProbs, { addToCart })(List);
