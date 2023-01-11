import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Carrinho from './pages/Carrinho';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/carrinho" component={ Carrinho } />
        <Route exact path="/" component={ Main } />
      </Switch>
    );
  }
}

export default App;
