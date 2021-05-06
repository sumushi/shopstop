
import './RegisterShopkeeper.css'
import { Component } from 'react';

class RegisterBuyer  extends Component {
    constructor(props){
        super(props);
        this.state={
            shop_email:'',
            shop_password:'',
            shop_name:'',
            phone:'',
            address:'',
            category:'',
            pincode:''  
        }
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
      //   console.log(this.state.regMail)
  
    }

    onSubmitRegister=()=>{
        fetch("https://api-shopstop.herokuapp.com/shopreg",{
            method:'post',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({
              shop_email:this.state.shop_email,
              shop_password:this.state.shop_password,
              shop_name:this.state.shop_name,
              phone:this.state.phone,
              address:this.state.address,
              category:this.state.category,
              locality_pin_code:this.state.pincode
            })
        })
        .then(res=>res.json())
            .then(shop=>{
                console.log("shop main hu", shop)
                if(shop.shopid){
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
            <div className="w-90 w-80-m w-50-l center cf cover bg-top bg-center shadow-1 bg-light-gray buyer" >
    
                <div className="w-80 w-70-m w-60-l fr bg-white">
                    <header className="pa3 bb b--light-gray relative">
                        <h1 className="b ma0 f3">Register Shopkeeper</h1>
                    </header>
                    <article  action="" className="ph3 pt3 pb4 f7">
                      
                        <div className="mb3">
                            <label htmlFor="" className="db ttu b lh-copy">Email</label>
                            <input 
                            onChange={this.handleChange}
                            name="shop_email" type="email" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">Password</label>
                            <input
                            onChange={this.handleChange}
                            name="shop_password" type="password" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">Name</label>
                            <input 
                            onChange={this.handleChange}
                            name="shop_name" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">Phone</label>
                            <input 
                            onChange={this.handleChange}
                            name="phone" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">Address</label>
                            <input
                            onChange={this.handleChange}
                            name="address" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">Category</label>
                            <input 
                            onChange={this.handleChange}
                            name="category" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb4">
                            <label htmlFor="" className="db ttu b lh-copy">Pin code</label>
                            <input
                              onChange={this.handleChange}
                            name="pincode" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb3 tc f6">
                            Do you have an account? <p 
                            onClick={() => this.props.onRouteChange('signinshopkeeper')}
                            className="blue di pointer underline ph1">Sign In Now!</p>
                        </div>
                        <div className="tc">
                            <input type="submit" 
                            onClick={this.onSubmitRegister} 
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