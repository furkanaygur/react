import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import List from './components/List';
import Cart from './components/Cart';
import './style.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const App = ({ cart }) => {
  const countOfCartItems = cart.reduce((acc, data) => (acc += data.count), 0);

  return (
    <div className="container">
      <h1 className="title">Shopping Cart with REDUX</h1>

      <NavLink className="btn" activeClassName="active" exact to="/">
        Home
      </NavLink>
      <NavLink className="btn" activeClassName="active" to="/cart">
        Cart ({countOfCartItems})
      </NavLink>

      <Route exact path="/" component={List} />
      <Route path="/cart" component={Cart} />
    </div>
  );
};

const mapStateToProbs = (state) => {
  return {
    cart: state.cart,
  };
};

export default withRouter(connect(mapStateToProbs)(App));
