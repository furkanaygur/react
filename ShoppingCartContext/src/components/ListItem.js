import React from 'react';
import { Context, useContext } from '../context/index';

const ListItem = (probs) => {
  const { addToCart } = useContext(Context);

  const { book, cart } = probs;

  return (
    <div className="list-item">
      <img className="list-item-image" src={book.image} alt={book.name} />
      <div className="list-item-info">
        <span>
          <h3>{book.name}</h3>
          <small>{book.author}</small>
        </span>
        <span>
          <b>Price:</b> ₺ {book.price}
        </span>
        <div>
          <button className="add-btn" onClick={() => addToCart(book)}>
            Add to Cart
          </button>
          {cart.map((cartItem) =>
            cartItem.id === book.id ? (
              cartItem.count > 0 ? (
                <span style={{ marginLeft: '5px' }}>
                  {' '}
                  ({cartItem.count} in the shopping cart){' '}
                </span>
              ) : null
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
