
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

const intialState={
  route:'usertype',
  isSignedin:'false',
  user:{   
           cust_id:'',
           username:'',
            mail:'',
            password:'',
            phone:'',
            houseno:'',
            area:'',
            city:'',
            pincode:''

  }

}


class App extends Component {
  constructor() {
    super();
    this.state = {intialState }

  }


//   area: "frstpong"
// city: "fist"
// cust_id: 1684
// houseno: 24
// locality_pin_code: 453670
// mail: "frst@gmail.com"
// password: "$2b$10$g9OyN1iytIw.LHe0fwkcwu41orIAy4sn8W.Hr8pBWMBkCLtFwglzS"
// phone: "90909087"
// sector: null
// username: "frstuer"

  loadUser=(user)=>{
    // console.log(user)
    console.log("inside",user.cust_id) 
    this.setState({user:{ 
      cust_id:user.cust_id,
      username:user.username,
      mail:user.mail,
      password:user.password,
      phone:user.phone,
      houseno:user.houseno,
      area:user.area,
      city:user.city,
      pincode:user.locality_pin_code }})
 
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
          <UserType onRouteChange={this.onRouteChange}/>
        :  (route === 'signinbuyer' ?
          <SignInBuyer onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
              : (route === 'signinshopkeeper' ?
              <SignInShopkeeper onRouteChange={this.onRouteChange}/>
                  : (route === 'registerbuyer' ?
                  <RegisterBuyer onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
                                : (route === 'registershopkeeper' ?
                                 <RegisterShopkeeper onRouteChange={this.onRouteChange}/>
                                : (route==='home'  ?
                               <div>
                                 <h1>{`I am ${this.state.user.username}`}</h1>
                                 <h2>{`I live in ${this.state.user.city}`}</h2>
                               </div>
                               : 
                               <div className='center pa7-ns'>
                                    <img src={Construction} alt='Logo' />  
                                </div>
                               )
                                
                              )
                )
            ) 
        )
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
