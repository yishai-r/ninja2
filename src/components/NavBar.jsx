import { NavLink,Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="navbar-container">
            <div className="navBar-Title">
                <h2>My Blog</h2>
            </div>
            <div className="navBar-Links">
            <Link to={"/home"}>Home</Link>
            <Link to={"/createpage"}>Create New Page</Link>
            </div>


        </div>


     );
}
 
export default NavBar;