import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
// import getProductsFromCategoryAndQuery from './services/api.js';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {getCategories()}
        {getProductsFromCategoryAndQuery()}
      </div>
    );
  }
}

export default App;
