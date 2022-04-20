import React, {useContext} from "react"; 
import"../styles/NewsCard.css"
import { Link } from "react-router-dom";
import { NewsContext } from "../Context/NewsContext";

function NewsCard(props) {
    const {setNumber}= useContext(NewsContext);
return(
    <div className="col-lg-4 col-md-6">
    <div className="p-3 cardContainer">

    <img  className="cardImg" alt={props.title} src={props.image}/>
   <Link onClick={()=>setNumber(props.index)} style={{textDecoration:"none"}} to="/det"> <div className="cardTitle">{props.title}</div></Link></div>
  </div>



);
}

export default NewsCard;
