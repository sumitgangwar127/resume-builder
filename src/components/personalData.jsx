import { useDispatch, useSelector } from "react-redux"
import "./css/form.css"
import Preview from "./preview"
import { detailsCreator }from "../redux/actions/detailsAction"
import { useHistory } from "react-router"

let PersonalData = ()=>{
    let details = useSelector((state)=>state.details);
    console.log(details);
    let dispatch = useDispatch();
    let history  = useHistory();
    let { fname , lname , email , contact, city, state} = details;
    
    return <> 

        <div className="personal-container">
            <div className="personal-form">
                <h2 class = "m-2">Personal Details</h2>

                <div class="row">
                    <div class="col-5 m-2">
                        <input type="text" 
                        value = {fname}
                        onChange={(e)=>{
                            dispatch(detailsCreator({fname: e.currentTarget.value}))
                        }}
                        class="form-control" placeholder="First name" />
                    </div>
                    <div class="col-5 m-2">
                        <input type="text" 
                        value = {lname}
                        onChange={(e)=>{
                        dispatch(detailsCreator({lname: e.currentTarget.value}))
                        }}
                        class="form-control" placeholder="Last name" />
                    </div>
                    <div class="col-5 m-2">
                        <input type="text"                         
                        value = {email}
                        onChange={(e)=>{
                        dispatch(detailsCreator({email: e.currentTarget.value}))
                        }}class="form-control" placeholder="Email" />
                    </div>
                    <div class="col-5 m-2">
                        <input type="text"                        
                        value = {contact}
                        onChange={(e)=>{
                        dispatch(detailsCreator({contact: e.currentTarget.value}))
                        }} class="form-control" placeholder="Contact Number" />
                    </div>
                    <div class="col-5 m-2">
                        <input type="text"                       
                        value = {city}
                        onChange={(e)=>{
                        dispatch(detailsCreator({city: e.currentTarget.value}))
                        }} class="form-control" placeholder="City" />
                    </div>
                    <div class="col-5 m-2">
                        <input type="text" 
                        value = {state}
                        onChange={(e)=>{
                        dispatch(detailsCreator({state: e.currentTarget.value}))
                        }}
                        class="form-control" placeholder="state" />
                    </div>
                </div>

                    <br />
                    <br />
                    
                <button  onClick={()=>{
                    history.push("/qualifications")
                }} class="btn btn-primary m-2">Next</button>
            </div>
            <Preview />
        </div>

    </>
}


export default PersonalData;