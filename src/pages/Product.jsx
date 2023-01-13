import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class Product extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.fetchApi();
  }

  fetchApi = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const data = await getProductById(id);

    this.setState({
      products: data,
    });
  };

  addProduct = (product) => {
    const newList = [];
    newList.push(product);
    console.log(newList);

    localStorage.setItem('Produtos', JSON.stringify(newList));
  };

  render() {
    const { products } = this.state;
    const { addProduct } = this;
    return (
      <section>
        <h1>Detalhes do Produto</h1>
        <p data-testid="product-detail-name">
          {
            products.title
          }
        </p>
        <img
          data-testid="product-detail-image"
          src={ products.thumbnail }
          alt={ products.title }
        />
        <p data-testid="product-detail-price">
          R$
          {products.price}
        </p>
        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          Ir para o carrinho
        </Link>
        <div>
          <button
            type="button"
            onClick={ () => addProduct(products) }
            data-testid="product-detail-add-to-cart"
          >
            adicionar e ir ao carrinho
          </button>
        </div>
      </section>
    );
  }
}

export default Product;

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
