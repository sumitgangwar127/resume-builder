import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router";
import {detailsCreator} from "../redux/actions/detailsAction"
import { saveResume } from "../redux/actions/saveActions";
import Preview from "./preview"
import "./css/form.css"

let Qualifications =()=>{
    let dispatch = useDispatch();
    let history = useHistory();

    
    let {degree, college, cgpa, year, isPublic} = useSelector((state)=>state.details);
    
    
    let details =useSelector((state)=>state.details);
    let {uid} = useSelector(state=>state.user)
    let code  = useSelector(state=>state.template)

    let {id} = useSelector(state=>state.saveState)


    return <> 
    
    <div className="prof-container">
            <div className="prof-form">
                <h2 class = "m-2">Professional Details</h2>

                <div class="row">
                    <div class="col-5 m-2">
                        <input type="text" 
                        value = {degree}
                        onChange={(e)=>{
                            dispatch(detailsCreator({degree: e.currentTarget.value}))
                        }}
                        class="form-control" placeholder="Degree" />
                    </div>
                    <div class="col-5 m-2">
                        <input type="text" 
                        value = {college}
                        onChange={(e)=>{
                        dispatch(detailsCreator({college: e.currentTarget.value}))
                        }}
                        class="form-control" placeholder="College" />
                    </div>
              
                    <div class="col-5 m-2">
                        <input type="text"                        
                        value = {cgpa}
                        onChange={(e)=>{
                        dispatch(detailsCreator({cgpa: e.currentTarget.value}))
                        }} class="form-control" placeholder="CGPA" />
                    </div>
                    <div class="col-5 m-2">
                        <input type="text"                       
                        value = {year}
                        onChange={(e)=>{
                        dispatch(detailsCreator({year: e.currentTarget.value}))
                        }} class="form-control" placeholder="Year of Grad" />
                    </div>
                
                </div>
                <br />
                <div class="form-check">
                    <input class="form-check-input m-1" type="checkbox" 
                        id="flexCheckDefault"
                        checked={isPublic} 
                        onClick={(e)=>{
                            dispatch(detailsCreator({isPublic: e.currentTarget.checked}))
                        }}
                        />

                    <label class="form-check-label  " for="flexCheckDefault">
                        Make public
                    </label>
                </div>

                    <br />
                    <br />
                    
                <button  onClick={()=>{
                    history.push("/personal")
                }} class="btn btn-primary m-2">Back</button>
            </div>

            <Preview />
        </div>

        <button onClick={()=>{
            alert(`localhost:3000/publicpreview/${id}`)
        }} className="btn btn-primary link-btn">Generate Link</button>
        <button onClick={()=>{
            dispatch(saveResume(uid, details,code))
        }} className="btn btn-primary save-btn">Save to Database</button>
    </>
}

export default Qualifications;