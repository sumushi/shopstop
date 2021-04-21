import React from 'react';

import Shopstop from './logo.png';
const Navigation = ({onRouteChange}) => {


    return (

        <header className="bg-black-90 sticky w-100 ph3 pv3 pv4-ns ph4-m  flex items-center justify-between">
            
        
        
        <img  
        onClick={() => onRouteChange('usertype')} 
        className='w4 pointer' src={Shopstop} alt='Logo' />  
        
        
            <nav className="f6 fw6 ttu v-mid tracked flex justify-end">
                <p 
                onClick={() => onRouteChange('usertype')}
                className="link dim white dib mr3 pointer" title="Home">Home</p>
                <p className="link dim white dib mr3 pointer"title="About">About</p>
                <p className="link dim white dib mr3 pointer" title="Store">Store</p>
                <p className="link dim white dib pointer" title="Contact">Contact</p>
            </nav>
        </header>





    );


}
export default Navigation;