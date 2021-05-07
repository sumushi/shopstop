import React from 'react';
//import UserOrderCard from "../UserOrderCard/UserOrderCard"
import './UserOrders.css'


const UserOrders = ({ onRouteChange }) => {
    const arr = [{ title: "a", quantity: "1", shop: "a", date: "04/02/2021", address: "abcd", status: "", price: "400" },
    { title: "b", quantity: "2", shop: "b", date: "03/01/2020", address: "efgh", status: "", price: "1000" }]


    function UserOrderCard(props) {
        return (
            <div className="card">
                <div class="card-header b">
                    {props.title}
                </div>
                <div class="card-body">
                    <div className="row">
                        <div className="col-6">
                            <p class="card-text">Quantity: {props.quantity}</p>
                            <p class="card-text">Shop: {props.shop}</p>
                            <p class="card-text">Date: {props.date} </p>
                        </div>
                        <div className="col-6">
                            <p class="card-text">Order Address: {props.address}</p>
                            <p class="card-text">Status: {props.status}</p>
                            <h5 class="card-text b price">Total Price: {props.price} </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="userorders">
            <h1 className="b">
                My Orders
            </h1>
            <div className="mb3 tc f6 home">
                Want to order more ?<p
                    onClick={() => onRouteChange('userhome')} className="blue di pointer underline ph1">Home</p>
            </div>
            {arr.map((value, index) => {
                return <UserOrderCard key={index} title={value.title} quantity={value.quantity} shop={value.shop} date={value.date} address={value.address} status={value.status} price={value.price} />
            })}
        </div>
    )
}
export default UserOrders;
