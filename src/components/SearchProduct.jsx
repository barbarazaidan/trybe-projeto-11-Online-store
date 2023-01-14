import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchProduct extends React.Component {
  render() {
    const { product, addCart } = this.props;
    const { price, title, thumbnail } = product;

    return (
      <>
        <Link
          to={ `/product/${product.id}` }
          data-testid="product-detail-link"
        >
          <h2>{title}</h2>
          <img src={ thumbnail } alt={ `Foto do ${title}` } />
          <h3>{price}</h3>
        </Link>
        <button
          type="button"
          onClick={ () => addCart(product) }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </>
    );
  }
}

SearchProduct.propTypes = {
  product: propTypes.shape({
    price: propTypes.number,
    title: propTypes.string,
    thumbnail: propTypes.string,
    id: propTypes.string,
  }).isRequired,
  addCart: propTypes.func.isRequired,
};

export default SearchProduct;
