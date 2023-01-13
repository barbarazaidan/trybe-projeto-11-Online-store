import React from 'react';
import propTypes from 'prop-types';

class SearchProduct extends React.Component {
  render() {
    const { product } = this.props;
    const { price, title, thumbnail } = product;

    return (
      <>
        <h2>{title}</h2>
        <img src={ thumbnail } alt={ `Foto do ${title}` } />
        <h3>{price}</h3>
      </>
    );
  }
}

SearchProduct.propTypes = {
  product: propTypes.shape({
    price: propTypes.number,
    title: propTypes.string,
    thumbnail: propTypes.string,
  }).isRequired,
};

export default SearchProduct;
