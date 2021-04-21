
import React, { Component } from 'react';
import './App.css';
import Construction from './construction.jpg'
import Navigation from './components/Navigation/Navigation';
import UserType from './components/UserType/UserType'
import SignInBuyer from './components/SignInBuyer/SignInBuyer'
import SignInShopkeeper from './components/SignInShopkeeper/SignInShopkeeper'
import RegisterBuyer from './components/RegisterBuyer/RegisterBuyer'
import RegisterShopkeeper from './components/RegisterShopkeeper/RegisterShopkeeper'

import LandingUser from './components/LandingUser/LandingUser';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'usertype',
    }

  }
  onRouteChange = (route) => {

    this.setState({ route: route });

  }



  render() {
    const { route } = this.state;
    return (
      <div className='App'>

        <Navigation onRouteChange={this.onRouteChange} />

        {

          route === 'usertype' ?
            <UserType onRouteChange={this.onRouteChange} />
            : (route === 'signinbuyer' ?
              <SignInBuyer onRouteChange={this.onRouteChange} />
              : (route === 'signinshopkeeper' ?
                <SignInShopkeeper onRouteChange={this.onRouteChange} />
                : (route === 'registerbuyer' ?
                  <RegisterBuyer onRouteChange={this.onRouteChange} />
                  : (route === 'registershopkeeper' ?
                    <RegisterShopkeeper onRouteChange={this.onRouteChange} />
                    : (route === 'landinguser' ?
                      <LandingUser onRouteChange={this.onRouteChange} />
                      : <div className='center pa7-ns'>
                        <img src={Construction} alt='Logo' />
                    </div>
                  )
                )
              )))
        }

        {/*
      
      
      <RegisterBuyer />
      
      <SignInShopkeeper />
      <RegisterShopkeeper />*/}


      </div>
    );
  }
}

export default App;
