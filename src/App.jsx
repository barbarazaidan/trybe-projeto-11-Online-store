import React, { Component } from 'react';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import './App.css';

class App extends Component {
  render() {
    return (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
    );
  }
}

export default App;
