import React from 'react';
import './SignInShopkeeper.css'
const SignInShopkeeper = ({onRouteChange}) => {


    return (

        <div >

            <div className="pv4 mid-gray sans-serif">
                <div className="w-90 w-80-m w-50-l center cf cover bg-top bg-center shadow-1 bg-light-gray shopkeeper"  >

                    <div className="w-80 w-70-m w-60-l fr bg-white">
                        <header className="pa3 bb b--light-gray relative">
                            <h1 className="b ma0 f3">Sign In Shopkeeper</h1>
                        </header>
                        <article id="register-buyer" action="" className="ph3 pt3 pb4 f7">
                            <div className="mb3">
                                <label for="" className="db ttu b lh-copy">Username</label>
                                <input name="username" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                            </div>
                            
                            <div className="mb4">
                                <label for="" className="db ttu b lh-copy">Password</label>
                                <input name="password" type="password" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                            </div>
                            <div className="tc f6">
                                Are you new here? <p 
                                onClick={() => onRouteChange('registershopkeeper')}
                                className=" link pointer dib blue underline ph1">Register Now!</p>
                            </div>
                            <div className="mb3  tc f6">
                                Are you a Buyer? <p
                                onClick={() => onRouteChange('signinbuyer')} className="pointer underline dib blue ph1">Login Here!</p>
                            </div>
                            <div className="tc">
                                <input type="submit"
                                onClick={() => onRouteChange('underconstruction')}  value="Sign In" className="ttu bn pv3 ph4 f6 bg-blue white b br-pill pointer grow" />
                            </div>
                        </article>
                    </div>
                </div>

            </div>

        </div>
    );


}
export default SignInShopkeeper;