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
      productsLocal: [],
    };

    this.searchProducts = this.searchProducts.bind(this);
    this.saveInput = this.saveInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.addProduct = this.addProduct.bind(this);
    this.handleProductCard = this.handleProductCard.bind(this);
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
    const local = JSON.parse(localStorage.getItem('Produtos'));
    if (local) {
      this.setState({
        productsLocal: local,
      });
    }
  }

  handleChange = async (e) => {
    const products = await getProductsFromCategory(e.target.id);
    this.setState({ returnSearchProducts: products.results });
  };

  handleProductCard() {
    console.log('oi');
  }

  // addProduct(product) {
  //   const { products } = this.state;
  //   const number = -1;
  //   const produtoAtual = products.findIndex((item) => item.id === product.id);
  //   if (produtoAtual !== number && product.quantity > produtoAtual.quantity) {
  //     products[produtoAtual].quantity = product.quantity;
  //     this.setState({ products });
  //     localStorage.setItem('Produtos', JSON.stringify(products));
  //     return;
  //   }
  //   localStorage.setItem('Produtos', JSON.stringify([...products, product]));
  // }

  addCart = (product) => {
    const { productsLocal } = this.state;
    // console.log(productsLocal);
    const saveLocal = [...productsLocal, product];
    // console.log('saveLocal:', saveLocal);
    this.setState({ productsLocal: saveLocal });
    localStorage.setItem('Produtos', JSON.stringify(saveLocal));
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

  // addProduct(product) {
  //   const { products } = this.state;
  //   const number = -1;
  //   const produtoAtual = products.findIndex((item) => item.id === product.id);
  //   if (produtoAtual !== number && product.quantity > produtoAtual.quantity) {
  //     products[produtoAtual].quantity = product.quantity;
  //     this.setState({ products });
  //     localStorage.setItem('Produtos', JSON.stringify(products));
  //     return;
  //   }
  //   localStorage.setItem('Produtos', JSON.stringify([...products, product]));
  // }

  saveInput({ target }) {
    const { value } = target;
    this.setState({ searchInput: value });
  }

  render() {
    const { categories, returnSearchProducts, productsLocal } = this.state;
    // console.log(returnSearchProduc);

    return (
      <>
        <div className="header">
          <button
            type="button"
            className="btnCarrinho"
          >
            <Link
              data-testid="shopping-cart-button"
              to="/carrinho"
              className="linkCarrinho"
            >
              🛒 Carrinho
              <p data-testid="shopping-cart-size" className="qntCarrinho">
                { productsLocal.length }
              </p>
            </Link>
          </button>
        </div>
        <h1 data-testid="home-initial-message" className="tituloPrincipal">
          Digite algum termo de pesquisa ou escolha uma categoria
        </h1>
        <nav id="sidebar" className="navegacaoCategorias">
          {categories.map((category) => (
            <BarradeNavegacao
              name={ category.name }
              key={ category.id }
              id={ category.id }
              onChange={ this.handleChange }
              addCarState={ this.state }
            />))}
        </nav>
        <div className="divInputPesquisar">
          <input
            type="text"
            data-testid="query-input"
            className="inputPesquisa"
            onChange={ this.saveInput }
          />
          <button
            type="button"
            data-testid="query-button"
            className="btnPesquisar"
            onClick={ this.searchProducts }
          >
            Pesquisar
          </button>
        </div>
        {returnSearchProducts.length === 0
          ? <h2 className="nenhumProduto">Nenhum produto foi encontrado</h2>
          : (
            <div className="seccaoProdutos">
              <ul className="ulProducts">
                {returnSearchProducts.map((product) => (
                  <li data-testid="product" key={ product.id }>
                    <SearchProduct product={ product } addCart={ this.addCart } />
                    {/* <button
                    type="button"
                    data-testid="product-add-to-cart"
                    onClick={ () => this.addProduct(product) }
                  >
                    Adicionar ao Carrinho
                  </button> */}
                    {/* <button
                    type="button"
                    onClick={ () => {
                      if (!product.quantity) {
                        product.quantity = 1;
                      } else {
                        product.quantity += 1;
                      }
                    } }
                  >
                    + 1
                  </button> */}
                    {/* <Link
                    to={ `/product/${product.id}` }
                    data-testid="product-detail-link"
                  >
                    Ver detalhes
                  </Link> */}
                  </li>
                ))}
              </ul>
            </div>
          )}
      </>
    );
  }
}

export default Main;
