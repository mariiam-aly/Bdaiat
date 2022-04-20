import React,{useContext} from "react"; 
import"../styles/Nav.css"
import { ModeContext } from "../Context/ModeContext";
import { Link } from "react-router-dom";
function Nav() {
  const {setMode}= useContext(ModeContext);
return(
  <div className="navBar">
<p className="icon">NewsFeed</p>
<div className="menu">
<Link to="/">News</Link>
<div className="dropdown">
  <button className="dropbtn">Settings</button>
  <div className="dropdown-content">
    <a href="#">English</a>
    <a href="#">Arabic</a>
  </div>
</div>

<select name="modes" id="modes" onChange={(e)=>setMode(e.target.value)}>
<option value="light">Light</option>
<option value="dark">Dark 1</option>
<option value="dark2">Dark 2</option> </select>



</div>
  </div>



);
}

export default Nav;
