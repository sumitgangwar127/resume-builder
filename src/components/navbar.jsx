import { Link } from "react-router-dom";

let NavBar = ()=>{
    return<>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <Link class="navbar-brand mb-0 h1" to="/">Resume Builder</Link>
        </div>
    </nav>
    </>
}

export default NavBar;