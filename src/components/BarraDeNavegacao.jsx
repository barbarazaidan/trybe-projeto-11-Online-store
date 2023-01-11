import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class BarradeNavegacao extends Component {
  render() {
    const { name } = this.props;

    return (
      <label htmlFor={ name }>
        <input
          name="category"
          value={ name }
          id={ name }
          type="radio"
          data-testid="category"
        />
        { name }
      </label>
    );
  }
}

BarradeNavegacao.propTypes = {
  name: propTypes.string.isRequired,
};
