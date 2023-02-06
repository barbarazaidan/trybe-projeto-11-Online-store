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
        <h2 className="tituloDasPaginas">Checkout</h2>
        <div>
          <p className="itensNoCarrinhoCheckout">Produtos no carrinho:</p>
          <ul className="checkoutLista">
            { carrinho.map(({ title, id }) => (
              <li
                key={ id }
              >
                { title }
              </li>
            )) }
          </ul>
        </div>
        <form className="formCheckout">
          <section>
            <label htmlFor="nome" className="form-label">
              Nome Completo:
              <input
                type="text"
                id="nome"
                name="nome"
                value={ nome }
                onChange={ this.handleChange }
                className="form-control"
                data-testid="checkout-fullname"
              />
            </label>
          </section>

          <section className="col-md-6">
            <label htmlFor="Email" className="form-label">
              Email:
              <input
                type="email"
                id="email"
                name="email"
                value={ email }
                onChange={ this.handleChange }
                className="form-control"
                data-testid="checkout-email"
              />
            </label>
          </section>

          <section className="col-md-6">
            <label htmlFor="cpf" className="form-label">
              CPF:
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={ cpf }
                onChange={ this.handleChange }
                className="form-control"
                data-testid="checkout-cpf"
              />
            </label>
          </section>

          <section className="col-md-6">
            <label htmlFor="telefone" className="form-label">
              Telefone:
              <input
                type="text"
                id="telefone"
                name="telefone"
                value={ telefone }
                onChange={ this.handleChange }
                className="form-control"
                data-testid="checkout-phone"
              />
            </label>
          </section>

          <section className="col-md-6">
            <label htmlFor="cep" className="form-label">
              CEP:
              <input
                type="text"
                id="cep"
                name="cep"
                value={ cep }
                onChange={ this.handleChange }
                className="form-control"
                data-testid="checkout-cep"
              />
            </label>
          </section>

          <section className="col-md-6">
            <label htmlFor="endereco" className="form-label">
              Endereço:
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={ endereco }
                onChange={ this.handleChange }
                className="form-control"
                data-testid="checkout-address"
              />
            </label>
          </section>

          <p>Forma de Pagamento</p>

          <section className="col-12">
            <label htmlFor="boleto" className="form-check-label m-3">
              Boleto
              <input
                type="radio"
                id="boleto"
                name="pagamento"
                onChange={ this.handleRadioChange }
                className="form-check-input"
                data-testid="ticket-payment"
              />
            </label>

            <label htmlFor="visa" className="form-check-label m-3">
              Visa
              <input
                type="radio"
                id="visa"
                name="pagamento"
                onChange={ this.handleRadioChange }
                className="form-check-input"
                data-testid="visa-payment"
              />
            </label>

            <label htmlFor="master" className="form-check-label m-3">
              Master
              <input
                type="radio"
                id="master"
                name="pagamento"
                onChange={ this.handleRadioChange }
                className="form-check-input"
                data-testid="master-payment"
              />
            </label>

            <label htmlFor="elo" className="form-check-label m-3">
              Elo
              <input
                type="radio"
                id="elo"
                name="pagamento"
                onChange={ this.handleRadioChange }
                className="form-check-input"
                data-testid="elo-payment"
              />
            </label>
          </section>
          <button
            type="submit"
            data-testid="checkout-btn"
            className="btn btn-primary"
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
