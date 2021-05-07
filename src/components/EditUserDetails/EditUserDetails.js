import React, { useState } from 'react';
import EditDetailsField from "../EditDetailsField/EditDetailsField"
const EditUserDetails = ({ onRouteChange }) => {
    const [details, setDetails] = useState({email: "", password: "", username:"", phone: "", flatno: "", sector: "", area: "", city: "", pincode: ""})
    function handleChange(event){
        const {value, name}= event.target
        setDetails((prev) =>{
            if(name==="Email") return {...prev, email:value}
            else if(name==="Password") return {...prev, password:value}
            else if(name==="Username") return {...prev, username:value}
            else if(name==="Phone") return {...prev, phone:value}
            else if(name==="FlatNo./HouseNo.") return {...prev, flatno:value}
            else if(name==="Sector") return {...prev, sector:value}
            else if(name==="Area") return {...prev, area:value}
            else if(name==="City") return {...prev, city:value}
            else if(name==="Pincode") return {...prev, pincode:value}
        })
    }
    //console.log(details)
    return (
        <div className="edituserdetails">
            <h2 className="b pa4">Edit Your Details</h2>
            <EditDetailsField title={"Email"} type={"email"} onChange={handleChange}/>
            <EditDetailsField title={"Password"} type={"password"} onChange={handleChange}/>
            <EditDetailsField title={"Username"} type={"username"} onChange={handleChange}/>
            <EditDetailsField title={"Phone"} type={"number"} onChange={handleChange}/>
            <EditDetailsField title={"FlatNo./HouseNo."} type={"number"} onChange={handleChange}/>
            <EditDetailsField title={"Sector"} type={"number"} onChange={handleChange}/>
            <EditDetailsField title={"Area"} type={"text"} onChange={handleChange}/>
            <EditDetailsField title={"City"} type={"text"} onChange={handleChange}/>
            <EditDetailsField title={"Pincode"} type={"number"} onChange={handleChange}/>

            <div className="tc submit-btn pa5">
                <input type="submit"
                    onClick={() => onRouteChange('userhome')} value="Save Changes" className="btn bg-orange white pointer grow" />
            </div>
        </div>
    )
}
export default EditUserDetails;
