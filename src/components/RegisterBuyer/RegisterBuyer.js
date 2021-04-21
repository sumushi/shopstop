import React from 'react';

import './RegisterBuyer.css'

class RegisterBuyer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            regUsername:'',
            regMail:'',
            regPassword:'',
            regPhone:'',
            regHouseno:'',
            regArea:'',
            regCity:'',
            regPincode:''

        }
  }
  onMailChange=(event)=>{
      this.setState({regMail:event.target.value})
    //   console.log(this.state.regMail)

  }
  onPasswordChange=(event)=>{
    this.setState({regPassword:event.target.value})
  }
  onUsernameChange=(event)=>{
    this.setState({regUsername:event.target.value})
   }
   onPhoneChange=(event)=>{
    this.setState({regPhone:event.target.value})
   }
   onHousenoChange=(event)=>{
    this.setState({regHouseno:event.target.value})
    // console.log(this.state.regHouseno)
  }
  onAreaChange=(event)=>{
    this.setState({regArea:event.target.value})
 }
    onCityChange=(event)=>{
        this.setState({regCity:event.target.value})
    }
    onPincodeChange=(event)=>{
        this.setState({regPincode:event.target.value})
    }
    onSubmitRegister=()=>{
        fetch("https://api-shopstop.herokuapp.com/userreg",{
            method:'post',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({
              mail:this.state.regMail,
              password:this.state.regPassword,
              username:this.state.regUsername,
              phone:this.state.regPhone,
              houseno:this.state.regHouseno,
              area:this.state.regArea,
              city:this.state.regCity,
              locality_pin_code:this.state.regPincode
            })
        })
        .then(res=>res.json())
            .then(user=>{
                console.log("user main hu", user)
                if(user.cust_id){
                    this.props.loadUser(user)
                    this.props.onRouteChange('home')
                }
            })
            .catch(console.log)

    }



 render(){
   return (

        <div >

        <div className="pv4 mid-gray sans-serif">
            <div className="w-90 w-80-m w-50-l center cf cover bg-top bg-center shadow-1 bg-light-gray buyer" >
    
                <div className="w-80 w-70-m w-60-l fr bg-white">
                    <header className="pa3 bb b--light-gray relative">
                        <h1 className="b ma0 f3">Register Buyer</h1>
                    </header>
                    <article id="register-buyer" action="" className="ph3 pt3 pb4 f7">
                        <div className="mb3">
                            <label htmlFor="" className="db ttu b lh-copy">Username</label>
                            <input 
                            onChange={this.onUsernameChange}
                            name="username" 
                            type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb3">
                            <label htmlFor="" className="db ttu b lh-copy">Mail</label>
                            <input
                              onChange={this.onMailChange}
                             name="mail" type="mail" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">Password</label>
                            <input 
                              onChange={this.onPasswordChange}
                            name="password" type="password" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">Phone no</label>
                            <input 
                              onChange={this.onPhoneChange}
                            name="phone" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">House no</label>
                            <input 
                              onChange={this.onHousenoChange}
                            name="houseno" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">Area</label>
                            <input 
                              onChange={this.onAreaChange}
                            name="area" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">City</label>
                            <input
                              onChange={this.onCityChange}
                            name="city" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">Pin code</label>
                            <input
                              onChange={this.onPincodeChange}
                            name="pincode" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb3 tc f6">
                            Do you have an account? <p 
                            
                            className="blue di pointer underline ph1">Sign In Now!</p>
                        </div>
                        <div className="tc">
                            
                            <input 
                            onClick={this.onSubmitRegister} 
                            type="submit" 
                            value="Register" 
                            className="ttu bn pv3 ph4 f6 bg-blue white b br-pill pointer grow" />
                        </div>
                    </article>
                </div>
            </div>
            
        </div>
    
    </div>
    );
  
 }
    

}
export default RegisterBuyer;