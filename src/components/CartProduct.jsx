import React from 'react';
import propTypes from 'prop-types';

export default class CartProduct extends React.Component {
  state = {
    contador: 1,
  };

  increaseProduct = () => {
    const { produto } = this.props;
    const { contador } = this.state;

    if (produto.available_quantity > contador) {
      this.setState((estadoAnterior) => ({
        contador: estadoAnterior.contador + 1,
      }));
    }
  };

  decreaseProduct = () => {
    const { contador } = this.state;
    if (contador > 1) {
      this.setState((estadoAnterior) => ({
        contador: estadoAnterior.contador - 1,
      }));
    }
  };

  render() {
    const { produto, removeProduct } = this.props;
    const { contador } = this.state;
    return (
      <>
        <h2 data-testid="shopping-cart-product-name">
          {produto.title}
        </h2>
        <p>
          Preço:
          { produto.price }
        </p>
        <button
          type="button"
          id="buttonIncrease"
          data-testid="product-increase-quantity"
          onClick={ this.increaseProduct }
        >
          +
        </button>
        <p data-testid="shopping-cart-product-quantity">
          {contador}
        </p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.decreaseProduct }
        >
          -
        </button>
        <button
          type="button"
          data-testid="remove-product"
          onClick={ () => removeProduct(produto) }
        >
          excluir
        </button>
      </>
    );
  }
}

CartProduct.propTypes = {
  produto: propTypes.shape({
    title: propTypes.string,
    price: propTypes.number,
    available_quantity: propTypes.number,
  }).isRequired,
  removeProduct: propTypes.func.isRequired,
};
