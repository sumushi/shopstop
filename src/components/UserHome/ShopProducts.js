import React,{Component} from 'react';
import Product from './Product'

class ShopProducts extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }   
    }
    componentDidMount(){
       
        fetch("https://api-shopstop.herokuapp.com/myshop",{
        method:'post',
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify({
      shop_id:this.props.shopid
        })
    })
        .then(res=>res.json())
            .then(curproducts=>{
                this.setState({products:curproducts})
            })
            .catch(console.log)
          

    }
    render(){
        const {products}=this.state;
        return(
          <div>
              {
                  products.map((cur_product,ind)=>{
                   return <Product
                   key={ind}
                     description={cur_product.description}
                     price={cur_product.price}
                     pid={cur_product.pid}
                     qty={cur_product.quantity_available}
                   />
                  })
                  
              }

          </div>
        )
    }
}
export default ShopProducts;
