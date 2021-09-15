import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/home"
import Login from "./components/login"
import SignUp from "./components/signup"
import NavBar from "./components/navbar"
import PersonalData from "./components/personalData"
import Qualifications from "./components/qualifications"
import { useEffect } from "react"
import { auth, firestore } from "./firebase"
import { useDispatch } from "react-redux"
import { userCreator } from "./redux/actions/userActons"
import PublicPreview from "./components/publicPreview"




let App = ()=> {

  let dispatch = useDispatch();
  useEffect(()=>{

    let unsub =auth.onAuthStateChanged(async (user)=>{
      dispatch(userCreator(user))
      if(user){
        let {uid, email} = user;
        let docRef = firestore.collection("user").doc(uid);

        let doc = await docRef.get();

        if(!doc.exists){
          docRef.set({
            email,
          })
        }
      }

    })

    return ()=>{
      unsub();
    }

  },[])

  return (
   <>
   <Router>
     <NavBar />
     <Switch>
     <Route path="/publicpreview/:rid">
        <PublicPreview />
      </Route>
      <Route path="/qualifications">
        <Qualifications />
      </Route>
     <Route path="/personal">
         <PersonalData />
       </Route>
       <Route path="/login">
         <Login />
       </Route>
       <Route path="/signup">
         <SignUp />
       </Route>
       <Route path="/">
         <Home />
       </Route>
     </Switch>
   </Router>
   </>
  );
}

export default App;
