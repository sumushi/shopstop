const Product=({pid, description,price,qty})=>{
   
    return(
        <div >
            
            <h3>{description}</h3>
            <h4>{`${price}  ${qty}`}</h4>
          
        </div>
    )


}
export default Product;