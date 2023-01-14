import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class Product extends Component {
  state = {
    item: [],
    save: [],
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
      item: data,
    });
  };

  addCart = () => {
    const { item } = this.state;
    // console.log('item:', item);
    const produtosSalvos = JSON.parse(localStorage.getItem('Produtos'));
    if (produtosSalvos !== null) {
      const saveLocal = [...produtosSalvos, item];
      // console.log('savelocalif:', saveLocal);
      this.setState(
        { save: saveLocal },
        () => {
          const { save } = this.state;
          localStorage.setItem('Produtos', JSON.stringify(save));
        },
      );
    } else {
      const saveLocal = [item];
      // console.log('savelocalelse:', saveLocal);
      this.setState({ save: saveLocal });
      localStorage.setItem('Produtos', JSON.stringify(saveLocal));
    }
  };

  render() {
    const { item } = this.state;

    return (
      <section>
        <h1>Detalhes do Produto</h1>
        <p data-testid="product-detail-name">
          {
            item.title
          }
        </p>
        <img
          data-testid="product-detail-image"
          src={ item.thumbnail }
          alt={ item.title }
        />
        <p data-testid="product-detail-price">
          R$
          {item.price}
        </p>
        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          Ir Para o Carrinho
        </Link>
        <button
          type="button"
          onClick={ this.addCart }
          data-testid="product-detail-add-to-cart"
        >
          adicionar ao carrinho
        </button>
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
