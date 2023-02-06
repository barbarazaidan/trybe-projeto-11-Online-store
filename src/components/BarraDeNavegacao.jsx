import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { getProductsFromCategory } from '../services/api';

export default class BarradeNavegacao extends Component {
  render() {
    const { name, id, onChange } = this.props;

    return (
      <label htmlFor={ id } className="form-check form-check-inline p-2 ms-1">
        <input
          name="category"
          value={ name }
          id={ id }
          type="radio"
          data-testid="category"
          className="form-check-input"
          onChange={ onChange }
          // idCategory = { id }
        />
        { name }
      </label>
    );
  }
}

BarradeNavegacao.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
