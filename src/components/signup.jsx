import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { auth } from "../firebase";


let SignUp = ()=>{
    let history = useHistory();
    let [password , setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [email, setEmail] = useState("");
    let user = useSelector((state)=>state.user)

    return<>

        {user?<Redirect to="./home"/>:""}

        <div className="row">
            <div className="col-4 offset-4">
                <h1 className="mt-2 mb-4">SignUp!</h1>
            <form className="mt-4">

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.currentTarget.value);
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

            <div class="mb-3">
                <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
                <input type="password" 
                    value={confirmPassword}
                    onChange={(e)=>{
                        setConfirmPassword(e.currentTarget.value);
                    }}
                class="form-control" id="exampleInputPassword2"/>
            </div>

            <button type="submit" 
                onClick={(e)=>{
                    e.preventDefault();
                    if(password === confirmPassword){
                        auth.createUserWithEmailAndPassword(email,password);
                    }
                    else{
                        alert("Password doesn't matched")
                    }
                }}
            class="btn btn-primary">SignUp</button>
            <br />
            <br />
            <hr />
            <button onClick={()=>{
                history.push("/login")
            }} type="submit" class="btn btn-primary">Login</button>
            </form>
    
            </div>
        </div>
    </>
};

export default SignUp;