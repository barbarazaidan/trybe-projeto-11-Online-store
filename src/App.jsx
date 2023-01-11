import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Carrinho from './pages/Carrinho';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route path="/carrinho" component={ Carrinho } />
      </Switch>
    );
  }
}

export default App;
