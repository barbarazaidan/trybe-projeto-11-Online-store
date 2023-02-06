import React from 'react';
import { Link } from 'react-router-dom';
import CartProduct from '../components/CartProduct';

class Carrinho extends React.Component {
  state = {
    produtos: [],
    // contador: 1,
  };

  componentDidMount() {
    const produtosSalvos = JSON.parse(localStorage.getItem('Produtos'));
    // console.log(produtosSalvos);
    if (produtosSalvos !== null) {
      this.setState({ produtos: produtosSalvos });
    }
  }

  // increaseProduct = () => {
  //   this.setState((estadoAnterior) => ({
  //     contador: estadoAnterior.contador + 1,
  //   }));
  // };

  // decreaseProduct = () => {
  //   this.setState((estadoAnterior) => ({
  //     contador: estadoAnterior.contador - 1,
  //   }));
  // };

  removeProduct = (produto) => {
    const { produtos } = this.state;
    // console.log(produtos);
    console.log(produto.quantity);
    const novaLista = produtos.filter((item) => item.id !== produto.id);
    // console.log(novaLista);
    this.setState({ produtos: novaLista });
    localStorage.setItem('Produtos', JSON.stringify(novaLista));
  };

  render() {
    // const { produtos, contador } = this.state;
    const { produtos } = this.state;
    // console.log('produtos carrinho:', produtos);
    return (
      // <div>
      //   { produtos.length === 0
      //     ? (
      //       <p data-testid="shopping-cart-empty-message">
      //         Seu carrinho está vazio
      //       </p>
      //     )
      //     : (
      //       <div>
      //         <p>
      //           {produtos.length}
      //         </p>
      //         <div>
      //           {produtos.map((produto) => (
      //             <div key={ produto.id }>
      //               <h2 data-testid="shopping-cart-product-name">
      //                 {produto.title}
      //               </h2>
      //               <p>
      //                 Preço:
      //                 { produto.price }
      //               </p>
      //               <button<<<<<<< main-group-2-barbara-zaidan
      //                 type="button"
      //                 id="buttonIncrease"
      //                 data-testid="product-increase-quantity"
      //                 onClick={ this.increaseProduct }
      //               >
      //                 +
      //               </button>
      //               <p data-testid="shopping-cart-product-quantity">
      //                 {contador}
      //               </p>
      //               <button
      //                 type="button"
      //                 data-testid="product-decrease-quantity"
      //                 onClick={ this.decreaseProduct }
      //               >
      //                 -
      //               </button>
      //               <button
      //                 type="button"
      //                 data-testid="remove-product"
      //                 onClick={ () => this.removeProduct(produto) }
      //               >
      //                 excluir
      //               </button>
      //             </div>
      //           ))}
      //         </div>
      //       </div>
      //     )}
      // </div>
      <div>
        { produtos.length === 0
          ? (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          )
          : (
            <div>
              <h1 className="tituloDasPaginas">Carrinho de compras</h1>
              <p data-testid="shopping-cart-size" className="itensNoCarrinho">
                {`🛒 Itens no carrinho: ${produtos.length}`}
              </p>
              <div className="secaoCarrinho">
                {produtos.map((produto) => (
                  <div key={ produto.id } className="cartProdutoCarrinho">
                    {/* { produto.id } */}
                    <CartProduct
                      produto={ produto }
                      removeProduct={ this.removeProduct }
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        <br />
        <div className="irParaCheckout">
          <Link
            to="/checkout"
            data-testid="checkout-products"
          >
            <button
              type="button"
              className="btn btn-primary btn-lg"
            >
              Ir para Checkout
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Carrinho;
