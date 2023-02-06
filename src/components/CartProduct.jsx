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
        <div className="cartProdutoCarrinhoInfo">
          <h2
            data-testid="shopping-cart-product-name"
            className="cartProductCarrinhoTitle"
          >
            {produto.title}
          </h2>
          <p>
            Preço:
            { produto.price }
          </p>
        </div>
        <button
          type="button"
          id="buttonIncrease"
          data-testid="product-increase-quantity"
          className="btn btn-secondary"
          onClick={ this.increaseProduct }
        >
          +
        </button>
        <p data-testid="shopping-cart-product-quantity" className="qntProdutoCarrinho">
          {contador}
        </p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          className="btn btn-secondary"
          onClick={ this.decreaseProduct }
        >
          -
        </button>
        <button
          type="button"
          data-testid="remove-product"
          className="btn btn-danger p-1 mt-2"
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
