import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarradeNavegacao from '../components/BarraDeNavegacao';
import { getCategories } from '../services/api';

// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class Main extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link data-testid="shopping-cart-button" to="/carrinho">
          <p>Carrinho</p>
        </Link>
        <nav id="sidebar">
          { categories.map((category) => (
            <BarradeNavegacao
              name={ category.name }
              key={ category.id }
            />)) }
        </nav>
      </>
    );
  }
}

export default Main;
