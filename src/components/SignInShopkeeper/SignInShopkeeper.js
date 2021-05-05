import React,{Component} from 'react';
import './SignInShopkeeper.css'
class SignInShopkeeper extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }
   handleChange=(event)=>{
  this.setState({[event.target.name]:event.target.value})
   } 
   onSubmitSignin=()=>{
    fetch("https://api-shopstop.herokuapp.com/shoplogin",{
        method:'post',
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify({
          shop_email:this.state.email,
          shop_password:this.state.password,
        })
    })
    .then(res=>res.json())
        .then(shop=>{
         
            if(shop.shopid){
                console.log("shop main hu", shop)
                this.props.loadShop(shop)
                this.props.onRouteChange('shophome')
            }
        })
        .catch(console.log)

}
   

render(){
    return (

        <div >

            <div className="pv4 mid-gray sans-serif">
                <div className="w-90 w-80-m w-50-l center cf cover bg-top bg-center shadow-1 bg-light-gray shopkeeper"  >

                    <div className="w-80 w-70-m w-60-l fr bg-white">
                        <header className="pa3 bb b--light-gray relative">
                            <h1 className="b ma0 f3">Sign In Shopkeeper</h1>
                        </header>
                        <article id="register-buyer" action="" className="ph3 pt3 pb4 f7">
                            <div className="mb3">
                                <label htmlFor="" className="db ttu b lh-copy">Email</label>
                                <input 
                                  onChange={this.handleChange}
                                name="email" type="email" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                            </div>
                            
                            <div className="mb4">
                                <label htmlFor="" className="db ttu b lh-copy">Password</label>
                                <input
                                   onChange={this.handleChange}
                                 name="password" type="password" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                            </div>
                            <div className="tc f6">
                                Are you new here? <p 
                                onClick={() => this.props.onRouteChange('registershopkeeper')}
                                className=" link pointer dib blue underline ph1">Register Now!</p>
                            </div>
                            <div className="mb3  tc f6">
                                Are you a Buyer? <p
                                onClick={() => this.props.onRouteChange('signinbuyer')} className="pointer underline dib blue ph1">Login Here!</p>
                            </div>
                            <div className="tc">
                                <input type="submit"
                                onClick={this.onSubmitSignin} 
                                 value="Sign In" 
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
export default SignInShopkeeper;