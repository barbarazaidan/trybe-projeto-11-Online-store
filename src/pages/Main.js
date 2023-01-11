import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class Main extends Component {
  render() {
    return (
      <>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link data-testid="shopping-cart-button" to="/carrinho">
          <p>Carrinho</p>
        </Link>
      </>
    );
  }
}

export default Main;
