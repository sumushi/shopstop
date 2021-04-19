import React from 'react';
import Tilt from 'react-parallax-tilt';
import Buyer from './shopperIcon.png';
import Shopkeeper from './shopkeeperIcon.png';
const UserType = ({onRouteChange}) => {


    return (

        <div className='mt4 flex justify-center content-center' >
            
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <Tilt>
                <div className="tc pointer"
                    onClick={() => onRouteChange('signinbuyer')}>
                    <img src={Buyer} alt='Buyer' className="br-75 h4 w4 dib ba b--black-05 pa2" title="Buyer" />
                    <h1 className="f3 mb2">Buyer</h1>

                </div>
            </Tilt>
            </article>
            <div className='bb shadow-1 '></div>
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <Tilt>
                <div className="tc pointer"
                     onClick={() => onRouteChange('signinshopkeeper')}>
                    <img src={Shopkeeper} alt='Shopkeeper' className="br-75 h4 w4 dib ba b--black-05 pa2" title="Shopkeeper" />
                    <h1 className="f3 mb2">Shopkeeper</h1>

                </div>
                </Tilt>
            </article>
        </div>
    );


}
export default UserType;