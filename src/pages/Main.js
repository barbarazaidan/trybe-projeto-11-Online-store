import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarradeNavegacao from '../components/BarraDeNavegacao';
import SearchProduct from '../components/SearchProduct';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
  getProductsFromCategory,
} from '../services/api';

// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      searchInput: '',
      returnSearchProducts: [],
      // products: [],
    };

    this.searchProducts = this.searchProducts.bind(this);
    this.saveInput = this.saveInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  handleChange = async (e) => {
    const products = await getProductsFromCategory(e.target.id);
    console.log(products);

    this.setState({ returnSearchProducts: products.results });
  };

  async searchProducts() {
    // console.log('cliquei!');
    const { searchInput } = this.state;
    const searchProduct = await getProductsFromCategoryAndQuery('', searchInput);
    // console.log(searchProduct);
    const { results } = await searchProduct;
    // console.log(results);
    this.setState({ returnSearchProducts: results });
  }

  saveInput({ target }) {
    const { value } = target;
    this.setState({ searchInput: value });
  }

  render() {
    const { categories, returnSearchProducts } = this.state;
    // console.log(returnSearchProducts);

    return (
      <>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link data-testid="shopping-cart-button" to="/carrinho">
          <p>Carrinho</p>
        </Link>
        <nav id="sidebar">
          {categories.map((category) => (
            <BarradeNavegacao
              name={ category.name }
              key={ category.id }
              id={ category.id }
              onChange={ this.handleChange }
            />))}
        </nav>
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.saveInput }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.searchProducts }
        >
          Pesquisar
        </button>
        {returnSearchProducts.length === 0
          ? <h2>Nenhum produto foi encontrado</h2>
          : (
            <ul>
              {returnSearchProducts.map((product) => (
                <li data-testid="product" key={ product.id }>
                  <SearchProduct product={ product } />
                </li>
              ))}
            </ul>
          )}
      </>
    );
  }
}

export default Main;
