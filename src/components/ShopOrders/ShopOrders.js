import React from "react"
import './ShopOrders.css'
function ShopOrders({ onRouteChange }) {

    const arr = [{ title: "a", quantity: "1", name: "a", date: "04/02/2021", address: "abcd", status: "", price: "400" },
    { title: "b", quantity: "2", name: "b", date: "03/01/2020", address: "efgh", status: "", price: "1000" }]

    function ShopOrderCard(props) {
        return (
            <div className="shoporder pa4">
                <div className="card">
                    <div class="card-header b">
                        {props.title}
                    </div>
                    <div class="card-body">
                        <div className="row">
                            <div className="col-6">
                                <p class="card-text">Buyer Name: {props.name}</p>
                                <p class="card-text">Quantity: {props.quantity}</p>
                                <p class="card-text">Date: {props.date} </p>
                            </div>
                            <div className="col-6">
                                <p class="card-text">Shipping Address: {props.address}</p>
                                <p class="card-text">Status: {props.status}</p>
                                <h5 class="card-text b price">Total Selling Price: {props.price} </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <h1 className="b pa2">
                My Orders
            </h1>
            <div className="mb3 tc f6 home">
                <p onClick={() => onRouteChange('shophome')} className="blue di pointer underline ph1">Home</p>
            </div>
            {arr.map((value, index) => {
                return (
                    <ShopOrderCard key={index} title={value.title} quantity={value.quantity} name={value.name} date={value.date} address={value.address} status={value.status} price={value.price} />
                )
            })}
        </div>
    )
}
export default ShopOrders;