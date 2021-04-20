import React from 'react';

import './LandingUser.css'

const LandingUser = ({ onRouteChange }) => {

    return (
        <div>
            <div className="background">
                <button className="profile-btn btn btn-outline-danger" onClick={() => onRouteChange('underconstruction')} >
                    <img src="https://www.freeiconspng.com/uploads/profile-icon-person-user-19.png" alt="Edit Profile" title="Edit Profile"/>
                </button>
                <div class="input-group container-fluid w-50 tc ">
                    <input type="search" class="form-control rounded w-50 search-bar" placeholder="Search Locality" aria-label="Search"
                        aria-describedby="search-addon" />
                    <input type="submit" onClick={() => onRouteChange('underconstruction')} value="Search" className="ttu bn ph4 f6 bg-orange white b br-pill pointer grow" />
                </div>
            </div>
            <hr />
            <div className="recent-order">
                <h2>Recent Orders</h2>
                <div className="mb3 tc f6 more-order">
                    Looking for more? <p
                        onClick={() => onRouteChange('underconstruction')} className="blue di pointer underline ph1">My Orders</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <img className="order-image grow" src="https://images.unsplash.com/photo-1564859227770-c3ffd1fb1deb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="order" />
                            <h5 class="card-title">Order 1</h5>
                            <p class="card-text">Status: </p>
                            <button onClick={() => onRouteChange('underconstruction')} class="btn bg-orange white pointer grow">More Details</button>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <img className="order-image grow" src="https://images.unsplash.com/photo-1564859227770-c3ffd1fb1deb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="order" />
                            <h5 class="card-title">Order 2</h5>
                            <p class="card-text">Status: </p>
                            <button onClick={() => onRouteChange('underconstruction')} class="btn bg-orange white pointer grow">More Details</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <img className="order-image grow" src="https://images.unsplash.com/photo-1564859227770-c3ffd1fb1deb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="order" />
                            <h5 class="card-title">Order 3</h5>
                            <p class="card-text">Status: </p>
                            <button onClick={() => onRouteChange('underconstruction')} class="btn bg-orange white pointer grow">More Details</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="card">
                        <div class="card-body">
                            <img className="order-image grow" src="https://images.unsplash.com/photo-1564859227770-c3ffd1fb1deb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="order" />
                            <h5 class="card-title">Order 3</h5>
                            <p class="card-text">Status: </p>
                            <button onClick={() => onRouteChange('underconstruction')} class="btn bg-orange white pointer grow">More Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingUser;