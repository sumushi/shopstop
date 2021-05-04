import React from 'react';
import './UserHome.css'

const UserHome = ({ onRouteChange }) => {

    return (
        <div className="userhome">
            <div className="background">
                <button className="profile-btn btn btn-outline-danger" onClick={() => onRouteChange('edituserdetails')} >
                    <img src="https://www.freeiconspng.com/uploads/profile-icon-person-user-19.png" alt="Edit Profile" title="Edit Profile" />
                </button>
                <div class="input-group container-fluid w-50 tc ">
                    <input type="search" class="form-control rounded w-50 search-bar" placeholder="Search Pincode" aria-label="Search"
                        aria-describedby="search-addon" />
                    <input type="submit" onClick={() => onRouteChange('edituserdetails')} value="Search" className="ttu bn ph4 f6 bg-orange white b br-pill pointer grow" />
                </div>
                <div className="mb3 tc f6 home">
                    <p onClick={() => onRouteChange('userorders')} className="blue di pointer underline ph1">Orders</p>
                </div>
            </div>
        </div>
    )
}
export default UserHome;