import React from 'react';
import PropTypes from 'prop-types';

class FormAvaliacao extends React.Component {
  state = {
    rating: 0,
    email: '',
    textarea: '',
    avaliacao: [],
    validacao: true,
  };

  componentDidMount() {
    const { id } = this.props;
    const avaliacao = JSON.parse(localStorage.getItem(id)) || [];
    this.setState({ avaliacao });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleRadioChange = ({ target }) => {
    const { id } = target;
    this.setState({ rating: id });
  };

  validacaoAvaliacao = () => {
    const { email, rating } = this.state;

    const emailCarac = /\S+@\S+\.\S+/;
    const validarEmail = (emailTeste) => emailCarac.test(emailTeste);

    if (validarEmail(email) && rating > 0) {
      this.setState({
        validacao: true,
      }, this.handleSubmit);
    } else {
      this.setState({
        validacao: false,
      });
    }
  };

  handleSubmit = () => {
    const { email, rating, textarea } = this.state;
    this.setState((prevState) => ({
      avaliacao: [...prevState.avaliacao, { email, rating, textarea }],
    }), this.salvaravaliacao);
    this.limparAvaliacao();
  };

  limparAvaliacao = () => {
    this.setState({
      rating: 0,
      email: '',
      textarea: '',
    });
  };

  salvaravaliacao = () => {
    const { id } = this.props;
    const { avaliacao } = this.state;
    localStorage.setItem(id, JSON.stringify(avaliacao));
  };

  render() {
    const { email, textarea, validacao, avaliacao } = this.state;
    return (
      <div id="formDeAvaliacao">
        Avaliação
        <div>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              value={ email }
              data-testid="product-detail-email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="1">
            1
            <input
              type="radio"
              id="1"
              name="rating"
              data-testid="1-rating"
              onChange={ this.handleRadioChange }
            />
          </label>
          <label htmlFor="2">
            2
            <input
              type="radio"
              id="2"
              name="rating"
              data-testid="2-rating"
              onChange={ this.handleRadioChange }
            />
          </label>
          <label htmlFor="3">
            3
            <input
              type="radio"
              id="3"
              name="rating"
              data-testid="3-rating"
              onChange={ this.handleRadioChange }
            />
          </label>
          <label htmlFor="4">
            4
            <input
              type="radio"
              id="4"
              name="rating"
              data-testid="4-rating"
              onChange={ this.handleRadioChange }
            />
          </label>
          <label htmlFor="5">
            5
            <input
              type="radio"
              id="5"
              name="rating"
              data-testid="5-rating"
              onChange={ this.handleRadioChange }
            />
          </label>
          <label htmlFor="textarea">
            <textarea
              id="textarea"
              name="textarea"
              value={ textarea }
              placeholder="Deixe seu comentário sobre o produto"
              data-testid="product-detail-evaluation"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            data-testid="submit-review-btn"
            onClick={ this.validacaoAvaliacao }
          >
            Avaliar
          </button>
        </div>
        <div>
          {!validacao && <p data-testid="error-msg">Campos inválidos</p>}
          {avaliacao.map((comentario, index) => (
            <div key={ index }>
              <p data-testid="review-card-email">{comentario.email}</p>
              <p data-testid="review-card-rating">{comentario.rating}</p>
              <p data-testid="review-card-evaluation">{comentario.textarea}</p>
            </div>
          ))}
        </div>

      </div>
    );
  }
}

FormAvaliacao.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FormAvaliacao;
