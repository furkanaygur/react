import React from 'react';

const ListItem = ({ book, cart, addToCart }) => {
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
            cartItem.count > 0 ? (
              cartItem.id === book.id ? (
                <span key={book.id} style={{ marginLeft: '5px' }}>
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
