import React from "react"; 
import"../styles/Nav.css"
import { AiOutlineSearch } from "react-icons/ai";
function Nav() {
    
return(
  <div id="nav">
<h id="icon">NewsFeed</h>
<div style={{position:"relative"}}>
<AiOutlineSearch id="srch"/>
<input id="search" type="text" placeholder="Search News"/></div>

  </div>



);
}

export default Nav;
