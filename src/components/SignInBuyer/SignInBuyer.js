import React from 'react';

import './SignInBuyer.css'


    class SignInBuyer extends React.Component{
     constructor(props){
         super(props);
         this.state={
            signinMail:'',
            signinPassword:'',
        }

     }
     onMailChange=(event)=>{
        this.setState({signinMail:event.target.value})
      //   console.log(this.state.signinMail)
  
    }
    onPasswordChange=(event)=>{
      this.setState({signinPassword:event.target.value})
    }
    onSubmitSignin=()=>{
        fetch("https://api-shopstop.herokuapp.com/userlogin",{
            method:'post',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({
              mail:this.state.signinMail,
              password:this.state.signinPassword,
            })
        })
        .then(res=>res.json())
            .then(user=>{
             
                if(user.cust_id){
                    console.log("user main hu", user)
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
                <div className="w-90 w-80-m w-50-l center cf cover bg-top bg-center shadow-1 bg-light-gray buyer"  >

                    <div className="w-80 w-70-m w-60-l fr bg-white">
                        <header className="pa3 bb b--light-gray relative">
                            <h1 className="b ma0 f3">Sign In Buyer</h1>
                        </header>
                        <article id="register-buyer" action="" className="ph3 pt3 pb4 f7">
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
                            <div className="mb3 tc f6">
                                Are you new here? <p 
                                onClick={() =>this.props.onRouteChange('registerbuyer')}className="blue di pointer underline ph1">Register Now!</p>
                            </div>
                            <div className="mb3 tc f6">
                                Are you a Shopkeeper? <p 
                                onClick={() =>this.props.onRouteChange('signinshopkeeper')}className="blue di pointer underline ph1">Login Here!</p>
                            </div>
                            <div className="tc">
                                <input type="submit" 
                                onClick={this.onSubmitSignin} value="Sign In" className="ttu bn pv3 ph4 f6 bg-blue white b br-pill pointer grow" />
                            </div>
                        </article>
                    </div>
                </div>

            </div>

        </div>
    );
 
}
    

}
export default SignInBuyer;