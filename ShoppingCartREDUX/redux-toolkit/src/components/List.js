import React from 'react';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

const List = () => {
  const { books, cart } = useSelector((state) => state.cart);
  return (
    <div className="list">
      <>
        {books.map((book) => (
          <ListItem key={book.id} book={book} cart={cart} />
        ))}
      </>
    </div>
  );
};

export default List;
