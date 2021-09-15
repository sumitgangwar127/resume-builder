import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { auth } from "../firebase";
import { templateCreator } from "../redux/actions/templateActions"
import "./css/home.css"


let Home = ()=>{
    let history = useHistory();
    let user = useSelector((state)=>state.user);
    let tamplate = useSelector((state)=>state.template)
    let dispatch = useDispatch();
    console.log(tamplate);


    return<>
    {user?"Home":<Redirect to="./login" />}

    <button className="logout-btn"
    onClick={()=>{
        auth.signOut();
    }}>LOGOUT</button>

    <div className="template-container">
        <div 
         onClick={()=>{
            dispatch(templateCreator("A"));
            history.push("/personal")
        }}
        className="tamplate">
            <img src="http://localhost:3000/skin1.svg" alt="" />
        </div>

        <div  onClick={()=>{
            dispatch(templateCreator("B"));
            history.push("/personal")
        }}
        className="tamplate">
        <img src="http://localhost:3000/skin2.svg"  alt=""/>
        </div>
    </div>
    </>
};

export default Home;