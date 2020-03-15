import React, { Component } from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';



class App extends Component {
  render() {
    return (
    <Switch >
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/Shop' component={ShopPage}></Route>
    </Switch>
    )}
}

export default App;