import React from "react"

function EditDetailsField(props){
    return(
        <div className=" field pa3">
            <label for="" className="db b lh-copy field-name">{props.title}</label>
            <input name={props.title} type={props.type} className="input-reset w-25 br2 pa2 bg-light-gray" onChange={props.onChange}/>
        </div>
    )
}
export default EditDetailsField;