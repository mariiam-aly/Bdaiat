import React,{useContext} from "react"; 
import"../styles/Nav.css"
import { ModeContext } from "../Context/ModeContext";

function Nav() {
  const {setMode}= useContext(ModeContext);
return(
  <div className="navBar">
<p className="icon">NewsFeed</p>
<select name="modes" id="modes" onChange={(e)=>setMode(e.target.value)}>
<option value="light">Light</option>
<option value="dark">Dark 1</option>
<option value="dark2">Dark 2</option> </select>

  </div>



);
}

export default Nav;
