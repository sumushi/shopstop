import React from 'react';

import './RegisterBuyer.css'

class RegisterBuyer extends React.Component{
    constructor(props){
        super(props);
        this.state={
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
  handleChange=(event)=>{
      this.setState({[event.target.name]:event.target.value})
    //   console.log(this.state.regMail)

  }
  handleRoute=(event)=>{
      this.props.onRouteChange('signinbuyer')
  }
 
    onSubmitRegister=()=>{
        fetch("https://api-shopstop.herokuapp.com/userreg",{
            method:'post',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({
              mail:this.state.mail,
              password:this.state.password,
              username:this.state.username,
              phone:this.state.phone,
              houseno:this.state.houseno,
              area:this.state.area,
              city:this.state.city,
              locality_pin_code:this.state.pincode
            })
        })
        .then(res=>res.json())
            .then(user=>{
                console.log("user main hu", user)
                if(user.cust_id){
                    this.props.loadUser(user)
                    this.props.onRouteChange('userhome')
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
                            onChange={this.handleChange}
                            name="username" 
                            type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb3">
                            <label htmlFor="" className="db ttu b lh-copy">Mail</label>
                            <input
                              onChange={this.handleChange}
                             name="mail" type="mail" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">Password</label>
                            <input 
                              onChange={this.handleChange}
                            name="password" type="password" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">Phone no</label>
                            <input 
                              onChange={this.handleChange}
                            name="phone" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">House no</label>
                            <input 
                              onChange={this.handleChange}
                            name="houseno" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">Area</label>
                            <input 
                              onChange={this.handleChange}
                            name="area" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">City</label>
                            <input
                              onChange={this.handleChange}
                            name="city" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">Pin code</label>
                            <input
                              onChange={this.handleChange}
                            name="pincode" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb3 tc f6">
                            Do you have an account? 
                            <p 
                             onClick={this.handleRoute}
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