import React, {useContext,useEffect} from "react"; 
import"../styles/Details.css"
import { NewsContext } from "../Context/NewsContext";
import { useTranslation } from "react-i18next";
function Details() {
  const { t} = useTranslation();
   
    const {num}= useContext(NewsContext);

    
    
    
return(
  <div id="details">
  
  <p className="title"> {num.author}: {num.title}</p>
  <p className="pub">Publish Date: { num.time}</p>
  <img src={num.image} alt={num.title}/>
 <p className="content">{num.content}</p>
 <a  target="_blank" rel="noreferrer" href={num.url}>{t("det.link")} </a>
  </div>



);
}

export default Details;
