import React from 'react';

class Carrinho extends React.Component {
  state = {
    produtos: [],
  };

  componentDidMount() {
    const produtosSalvos = JSON.parse(localStorage.getItem('Produtos'));
    this.setState({ produtos: produtosSalvos });
  }

  render() {
    const { produtos } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
        <p data-testid="shopping-cart-product-quantity">
          {produtos?.length}
        </p>
        <div>
          <div>
            {produtos?.map((produto) => (
              <div key={ produto.id }>
                <h2 data-testid="shopping-cart-product-name">
                  {produto.title}
                </h2>
                <p>
                  Preço:
                  {
                    produto.price
                  }
                </p>
                <p>{produto.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Carrinho;
