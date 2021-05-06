import React,{Component} from 'react';
import Shop from './Shop'
import './UserHome.css'

class UserHome extends Component {
    constructor(props){
        super(props);
        this.state={
           search:"",
           all:true,
           currentshop:[]
        }
    }
    componentDidMount(){
         let  {currentshop}=this.state;
        fetch("https://api-shopstop.herokuapp.com/checkshop",{
            method:'get',
            headers:{'Content-Type':"application/json"},
        })
        .then(res=>res.json())
            .then(shop=>{
                this.setState({currentshop:shop})
                console.log(currentshop)
            })
            .catch(console.log)
            console.log(currentshop)

    }
    handleChange=(evt)=>{
        this.setState({[evt.target.name]:evt.target.value})
    }
    onSubmitChange=(evt)=>{
        evt.preventDefault();
         fetch("https://api-shopstop.herokuapp.com/locality",{
        method:'post',
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify({
      locality_pin_code:this.state.search
        })
    })
    .then(res=>res.json())
        .then(shop=>{
            console.log("inside submit", shop, shop.length)
             this.setState({currentshop:shop})   
        })
        .catch(console.log)
       
    }
    handleClearState=(evt)=>{
        this.props.clearState();

    }
   

 
    render(){
        const {onRouteChange}=this.props;
        let  {currentshop}=this.state;

        return (
            <div className="userhome">
                <div className="background">
                   

             <div className="input-group container-fluid w-50 tc ">
                 <form  onSubmit={this.onSubmitChange}>
                      <input
                    onChange={this.handleChange}
                     type="search"
                    name="search"
                    value={this.state.search}
                     className="form-control rounded w-50 search-bar" 
                     placeholder="Search Pincode" 
                     aria-label="Search"
                     aria-describedby="search-addon" />
                     <button
                         type="submit" 
                         onClick={this.onSubmitChange}  
                     className="ttu bn ph4 f6 bg-orange white b br-pill pointer grow" >
                       Search
                        </button>      
                 </form>
  
            </div>
                 
                 {
                     currentshop.map((cur_shop,ind)=>{
                         return <Shop 
                         key={ind}
                         shop={cur_shop}
                         name={cur_shop.shop_name}
                         pincode={cur_shop.locality_pin_code}
                         address={cur_shop.address}
                         category={cur_shop.category}
                         routeShopProducts={this.props.routeShopProducts}
                         />
                     })
                 }
                  <button
                onClick={this.handleClearState}
                >
                   Log out 
                </button>
                    <div className="mb3 tc f6 home">
                        <p onClick={() => onRouteChange('userorders')} 
                        className="blue di pointer underline ph1">Orders</p>
                    </div>
                </div>
            </div>
        )

    }

   
}
export default UserHome;