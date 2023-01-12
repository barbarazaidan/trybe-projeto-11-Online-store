import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { getProductsFromCategory } from '../services/api';

export default class BarradeNavegacao extends Component {
  // state = {
  //   products:[],
  // }


  // handleChange = async (e) => {
  //   const products = await getProductsFromCategory(e.target.id)
  //   console.log(products);

  //   this.setState({products: products.results})
  // }

  render() {
    const { name, id, onChange } = this.props;

    return (
      <label htmlFor={ id }>
        <input
          name="category"
          value={ name }
          id={ id }
          type="radio"
          data-testid="category"
          onChange= { onChange }
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
