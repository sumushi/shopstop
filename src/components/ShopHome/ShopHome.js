import React,{Component} from "react";
import './ShopHome.css';
class ShopHome extends Component {
    constructor(props){
        super(props);
        this.state={
            pid:"",
            qty:"",
            price:"",
            description:""
        }
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    onSubmitChange=(evt)=>{
        evt.preventDefault();
        const {pid,qty,price,description}=this.state;
       console.log(this.props.shop.shopid);
        fetch("https://api-shopstop.herokuapp.com/addProduct",{
       method:'post',
       headers:{'Content-Type':"application/json"},
       body:JSON.stringify({
     pid:pid,
     shopid:this.props.shop.shopid,
     qty:qty,
     price:price,
     description:description
       })
   })
   .then(res=>res.json())
       .then(product=>{
            console.log(product)
            this.setState({qty:"",price:"",description:"",pid:""})
       })
       .catch(console.log)
    }

  render(){
      const {onRouteChange,clearState}=this.props;
    return (
        <div className="shophome">
            <div className="background">
                <h1 className="b">Welcome Shopkeeper</h1>
                <button className="profile-btn btn btn-outline-danger" onClick={() => onRouteChange('editshopdetails')} >
                    <img src="https://www.freeiconspng.com/uploads/profile-icon-person-user-19.png" alt="Edit Profile" title="Edit Profile" />
                </button>
                <form >
                    <label htmlFor="pid">Product id</label>
                    <input
                     name="pid"
                     onChange={this.handleChange}
                     value={this.state.pid}
                    />
                    <label htmlFor="qty">Quantity</label>
                    <input
                     name="qty"
                     onChange={this.handleChange}
                     value={this.state.qty}
                    />
                     <label htmlFor="description">Description</label>
                    <input
                     name="description"
                     onChange={this.handleChange}
                     value={this.state.description}
                    />
                      <label htmlFor="price">Price</label>
                    <input
                     name="price"
                     onChange={this.handleChange}
                     value={this.state.price}
                    />
                    <button
                    onClick={this.onSubmitChange}
                    >Add product</button>

                </form>
                <button
                onClick={()=>clearState()}
                >
                   Log out 
                </button>
                <div className="mb3 tc f6 home">
                    <p onClick={() => onRouteChange('shoporders')} className="blue di pointer underline ph1">Orders</p>
                </div>
            </div>
        </div>
    )
  }
    
}
export default ShopHome;