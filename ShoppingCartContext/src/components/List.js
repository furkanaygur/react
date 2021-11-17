import React from 'react';
import { Context, useContext } from '../context/index';
import ListItem from './ListItem';
const List = () => {
  const { state } = useContext(Context);

  return (
    <div className="list">
      {state.data.map((book) => (
        <ListItem key={book.id} book={book} cart={state.cart} />
      ))}
    </div>
  );
};

export default List;
