import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends Component {
  constructor(){
    super();
    this.state={
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          //console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <>
      <Header currentUser={this.state.currentUser}></Header>  
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/Shop' component={ShopPage}></Route>
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
      </>
    )}
}

export default App;