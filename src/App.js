import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';



const HatsPage = () => {
  return (
    <div>
      HatsPage
    </div>
  );
};
const JacketPage = () => {
  return (
    <div>
      Jackets
    </div>
  );
};
const SneakersPage = () => {
  return (
    <div>
      SneakersPage
    </div>
  );
};
const WomensPage = () => {
  return (
    <div>
      WomenPage
    </div>
  );
};const MensPage = () => {
  return (
    <div>
      MensPage
    </div>
  );
};

class App extends Component {
  render() {
    return (
    <Switch >
      <Route exact path='/' component={HomePage}></Route>
      <Route path='/Hats' component={HatsPage}></Route>
    </Switch>
    )}
}

export default App;