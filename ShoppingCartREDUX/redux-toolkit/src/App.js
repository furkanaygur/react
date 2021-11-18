import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import List from './components/List';
import Cart from './components/Cart';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Shopping Cart with REDUX</h1>

      <NavLink className="btn" activeClassName="active" exact to="/">
        Home
      </NavLink>
      <NavLink className="btn" activeClassName="active" to="/cart">
        Cart
      </NavLink>

      <Route exact path="/" component={List} />
      <Route path="/cart" component={Cart} />
    </div>
  );
};

export default App;
