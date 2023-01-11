import React, { Component } from 'react';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import './App.css';

class App extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
    );
  }
}

export default App;
