import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  state = {
    carrinho: [],
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    cep: '',
    endereco: '',
    pagamento: '',
    invalidar: false,
  };

  componentDidMount() {
    this.importaCarrinho();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleRadioChange = ({ target }) => {
    const { id } = target;
    this.setState({ pagamento: id });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      nome,
      email,
      cpf,
      telefone,
      cep,
      endereco,
      pagamento,
    } = this.state;

    const dadosArray = [nome, email, cpf, telefone, cep, endereco, pagamento];
    const verificaArray = dadosArray.includes('');

    if (verificaArray === false) {
      localStorage.removeItem('Produtos');
      const { history } = this.props;
      history.push('/');
    } else {
      this.setState({ invalidar: true });
    }
  };

  importaCarrinho = () => {
    const produtos = localStorage.getItem('Produtos');
    this.setState({
      carrinho: JSON.parse(produtos),
    });
  };

  render() {
    const {
      carrinho,
      nome,
      email,
      cpf,
      telefone,
      cep,
      endereco,
      invalidar,
    } = this.state;

    return (
      <div>
        <h2>Checkout</h2>
        <div>
          Produtos no carrinho
          <ul>
            { carrinho.map(({ title, id }) => (
              <li
                key={ id }
              >
                { title }
              </li>
            )) }
          </ul>
        </div>
        <form>
          <label htmlFor="nome">
            Nome Completo:
            <input
              type="text"
              id="nome"
              name="nome"
              value={ nome }
              onChange={ this.handleChange }
              data-testid="checkout-fullname"
            />
          </label>
          <label htmlFor="Email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="checkout-email"
            />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={ cpf }
              onChange={ this.handleChange }
              data-testid="checkout-cpf"
            />
          </label>
          <label htmlFor="telefone">
            Telefone:
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={ telefone }
              onChange={ this.handleChange }
              data-testid="checkout-phone"
            />
          </label>
          <label htmlFor="cep">
            CEP:
            <input
              type="text"
              id="cep"
              name="cep"
              value={ cep }
              onChange={ this.handleChange }
              data-testid="checkout-cep"
            />
          </label>
          <label htmlFor="endereco">
            Endereço:
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={ endereco }
              onChange={ this.handleChange }
              data-testid="checkout-address"
            />
          </label>
          <div>Forma de Pagamento</div>
          <div>
            <label htmlFor="boleto">
              Boleto
              <input
                type="radio"
                id="boleto"
                name="pagamento"
                onChange={ this.handleRadioChange }
                data-testid="ticket-payment"
              />
            </label>
            <label htmlFor="visa">
              Visa
              <input
                type="radio"
                id="visa"
                name="pagamento"
                onChange={ this.handleRadioChange }
                data-testid="visa-payment"
              />
            </label>
            <label htmlFor="master">
              Master
              <input
                type="radio"
                id="master"
                name="pagamento"
                onChange={ this.handleRadioChange }
                data-testid="master-payment"
              />
            </label>
            <label htmlFor="elo">
              Elo
              <input
                type="radio"
                id="elo"
                name="pagamento"
                onChange={ this.handleRadioChange }
                data-testid="elo-payment"
              />
            </label>
          </div>
          <button
            type="submit"
            data-testid="checkout-btn"
            onClick={ this.handleSubmit }
          >
            Finalizar Compra
          </button>
        </form>
        { invalidar && (<p data-testid="error-msg">Campos inválidos</p>) }
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Checkout;
