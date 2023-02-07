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
    const { value } = target;
    this.setState({ rating: value });
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
      rating: '',
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
      <div className="formDeAvaliacaoDiv">
        <h2 id="formDeAvaliacaoTitulo"> AVALIAÇÃO</h2>
        <div id="formDeAvaliacao">
          <label htmlFor="email" className="form-label me-4">
            Email
            <input
              type="email"
              id="email"
              name="email"
              value={ email }
              data-testid="product-detail-email"
              className="form-control"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="notaRadio" className="form-label me-4">
            Nota:
            <input
              type="radio"
              id="notaRadio"
              value="1"
              name="rating"
              data-testid="1-rating"
              className="form-check-input"
              onChange={ this.handleRadioChange }
            />
            1
            <input
              type="radio"
              id="notaRadio"
              value="2"
              name="rating"
              data-testid="2-rating"
              className="form-check-input"
              onChange={ this.handleRadioChange }
            />
            2
            <input
              type="radio"
              id="notaRadio"
              value="3"
              name="rating"
              data-testid="3-rating"
              className="form-check-input"
              onChange={ this.handleRadioChange }
            />
            3
            <input
              type="radio"
              id="notaRadio"
              value="4"
              name="rating"
              data-testid="4-rating"
              className="form-check-input"
              onChange={ this.handleRadioChange }
            />
            4
            <input
              type="radio"
              id="notaRadio"
              value="5"
              name="rating"
              data-testid="5-rating"
              className="form-check-input"
              onChange={ this.handleRadioChange }
            />
            5
          </label>
          <label htmlFor="textarea" className="form-label">
            <textarea
              id="textarea"
              name="textarea"
              value={ textarea }
              placeholder="Deixe seu comentário sobre o produto"
              data-testid="product-detail-evaluation"
              className="form-control formDeAvaliacaoTextArea"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            data-testid="submit-review-btn"
            className="formDeAvaliacaoBotao"
            onClick={ this.validacaoAvaliacao }
          >
            AVALIAR
          </button>
        </div>
        <div id="formDeAvaliacaoComentarios">
          {!validacao && <p data-testid="error-msg">Campos inválidos</p>}
          {avaliacao.map((comentario, index) => (
            <div key={ index }>
              <p data-testid="review-card-email">{comentario.email}</p>
              <p data-testid="review-card-rating">{`Nota: ${comentario.rating}`}</p>
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
