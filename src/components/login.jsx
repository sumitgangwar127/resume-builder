import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { auth } from "../firebase";

let Login = ()=>{
    let history = useHistory();
    let user = useSelector((state)=>state.user);
    let [password, setPassword]=useState("");
    let [email, setEmail] = useState("");

    return<>

    {/* condetional rendering */}
    {user? <Redirect to="./home" />:"" }

        <div className="row">
            <div className="col-4 offset-4">
                <h1 className="mt-2 mb-4">LogIn</h1>
            <form className="mt-4">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email"
                value={email}
                onChange={(e)=>{
                    setEmail(e.currentTarget.value)
                }} 
                class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.currentTarget.value);
                    }}
                class="form-control" id="exampleInputPassword1"/>
            </div>

            <button type="submit" 
                onClick={(e)=>{
                    // it prevent the the page from reload (default behaviour of button click is to reload page)
                    e.preventDefault(); 
                    auth.signInWithEmailAndPassword(email,password);

                }}
            class="btn btn-primary">LogIn</button>
            <br />
            <br />
            <hr />
            <button onClick={()=>{
                history.push("/signup")
            }} type="submit" class="btn btn-primary">SignUp</button>
            </form>
    
            </div>
        </div>
  
    </>
};

export default Login;







