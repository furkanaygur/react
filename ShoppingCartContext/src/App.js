import React, { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';
import List from './components/List';
import Cart from './components/Cart';

import { Context } from './context/index';

import { data } from './data';

export default function App() {
  const [state, setState] = useState({
    data: data,
    cart: [],
  });

  const addToCart = (book) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === book.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === book.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...book, count: 1 }],
    });
  };

  const increase = (book) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === book.id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decrease = (book) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === book.id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  const removeItem = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });
  };

  const cartItemCount = state.cart.reduce(
    (acc, data) => (acc += data.count),
    0
  );

  return (
    <Context.Provider
      value={{ state: state, addToCart, increase, decrease, removeItem }}
    >
      <div className="container">
        <h1 className="title">Shopping Cart with Context API</h1>

        <NavLink className="btn" activeClassName="active" exact to="/">
          Home
        </NavLink>
        <NavLink className="btn" activeClassName="active" to="/cart">
          Cart ({cartItemCount > 0 ? cartItemCount : 0})
        </NavLink>

        <Route exact path="/" component={List} />
        <Route path="/cart" component={Cart} />
      </div>
    </Context.Provider>
  );
}
