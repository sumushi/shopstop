import React from "react";
import './ShopHome.css';
function ShopHome({ onRouteChange }) {

    return (
        <div className="shophome">
            <div className="background">
                <h1 className="b">Welcome Shopkeeper</h1>
                <button className="profile-btn btn btn-outline-danger" onClick={() => onRouteChange('editshopdetails')} >
                    <img src="https://www.freeiconspng.com/uploads/profile-icon-person-user-19.png" alt="Edit Profile" title="Edit Profile" />
                </button>
                <div className="mb3 tc f6 home">
                    <p onClick={() => onRouteChange('shoporders')} className="blue di pointer underline ph1">Orders</p>
                </div>
            </div>
        </div>
    )
}
export default ShopHome;