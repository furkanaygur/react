import React from 'react';
import { useDispatch } from 'react-redux';
import { increase, decrease, removeItem } from '../stores/cartSlice';

const CartItem = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="list-item">
      <img className="list-item-image" src={book.image} alt={book.name} />
      <div className="list-item-info">
        <span>
          <h3>{book.name}</h3>
          <small>{book.author}</small>
        </span>
        <span style={{ display: 'flex' }}>
          <span>
            <b>Price:</b> ₺ {book.price.toFixed(2)} <br />
          </span>
          {book.count > 1 && (
            <>
              <span style={{ marginLeft: '1rem' }}>
                <b>Count: </b>x{book.count}
              </span>
              <span style={{ marginLeft: '1rem' }}>
                <b>Total:</b> ₺ {(book.price * book.count).toFixed(2)}
              </span>
            </>
          )}
        </span>
        <div>
          <button
            onClick={() => dispatch(decrease(book.id))}
            className="cart-btn"
          >
            {' '}
            -{' '}
          </button>
          <button
            onClick={() => dispatch(removeItem(book.id))}
            className="remove-btn"
          >
            delete
          </button>
          <button
            onClick={() => dispatch(increase(book.id))}
            className="cart-btn"
          >
            {' '}
            +{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
