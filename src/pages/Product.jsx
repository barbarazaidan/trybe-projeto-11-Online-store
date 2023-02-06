import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import FormAvaliacao from './FormAvaliacao';

class Product extends Component {
  state = {
    item: [],
    // save: [],
    produtos: [],
  };

  componentDidMount() {
    this.fetchApi();
    this.produto();
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
      console.log('savelocalif:', saveLocal);
      this.setState(
        { produtos: saveLocal },
        () => {
          // const { save } = this.state;
          const { produtos } = this.state;
          // localStorage.setItem('Produtos', JSON.stringify(save));
          localStorage.setItem('Produtos', JSON.stringify(produtos));
        },
      );
    } else {
      const saveLocal = [item];
      // console.log('savelocalelse:', saveLocal);
      // this.setState({ save: saveLocal });
      this.setState({ produtos: saveLocal });
      // localStorage.setItem('Produtos', JSON.stringify(saveLocal));
    }
  };

  produto = () => {
    const produtos = localStorage.getItem('Produtos');
    if (produtos) {
      const produtosLocal = JSON.parse(produtos);
      this.setState({
        produtos: produtosLocal,
      });
    } else {
      this.setState({
        produtos: [],
      });
    }
  };

  render() {
    const { item, produtos } = this.state;
    const { match: { params: { id } } } = this.props;

    return (
      <section>
        <h1 className="tituloDasPaginas">Detalhes do Produto</h1>
        <p data-testid="shopping-cart-size" className="itensNoCarrinho">
          {`🛒 Itens no carrinho: ${produtos.length}`}
        </p>
        <div id="produtoDetalhesDiv">
          <img
            data-testid="product-detail-image"
            src={ item.thumbnail }
            alt={ item.title }
            id="produtoDetalhesImagem"
          />
          <div id="produtoDetalhesTituloPreco">
            <p data-testid="product-detail-name" id="produtoDetalhesTitulo">
              {
                item.title
              }
            </p>
            <p data-testid="product-detail-price" id="produtoDetalhesPreco">
              R$
              {item.price}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={ this.addCart }
          data-testid="product-detail-add-to-cart"
          id="produtoDetalhesBotaoCarrinho"
        >
          ADICIONAR AO CARRINHO
        </button>
        <Link
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          <button type="button" id="produtoDetalhesLinkBotao">
            IR PARA O CARRINHO
          </button>
        </Link>
        <FormAvaliacao id={ id } />
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
