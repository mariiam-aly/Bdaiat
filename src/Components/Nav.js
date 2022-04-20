import React,{useContext,useEffect, useState} from "react"; 
import"../styles/Nav.css"
import { ModeContext } from "../Context/ModeContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LangContext } from "../Context/LangContext";
function Nav() {
  const {mode,setMode}= useContext(ModeContext);
  const {SetLanguage}= useContext(LangContext);
  const [langSwitch, setLangSwitch]= useState("");
  const { t, i18n } = useTranslation();

  const changeLanguage = (language,x,l) => {
    i18n.changeLanguage(language);
    setLangSwitch(language);
  document.getElementById("root").style.direction=x;
  SetLanguage(l);
  };

  useEffect(()=>{

    const data= window.localStorage.getItem('LANG');

    if (data!==null){
      i18n.changeLanguage(JSON.parse(data));
      setLangSwitch(JSON.parse(data));
    
   }
   },[i18n]);


  useEffect(()=>{

    window.localStorage.setItem('LANG',JSON.stringify(langSwitch))
    
  },[langSwitch]);

  useEffect(()=>{

    const data= window.localStorage.getItem('MODE');

    if (data!==null){
     
      setMode(JSON.parse(data));
    
   }
   },[]);


  useEffect(()=>{

    window.localStorage.setItem('MODE',JSON.stringify(mode))
    
  },[mode]);

  
  

return(
  <div className="navBar">
<p className="icon">NewsFeed</p>
<div className="menu">
<Link to="/">{t("nav.news")}</Link>
<div className="dropdown">
  <button className="dropbtn">{t("nav.settings")}</button>
  <div className="dropdown-content">
  <h6 className="disable" >{t("nav.lang")}</h6>
    <p onClick={() => changeLanguage("en","ltr",true)}>English</p>
    <p  onClick={() => changeLanguage("ar","rtl",false)}>العربية</p>
  </div>
</div>

<select name="modes" id="modes" onChange={(e)=>setMode(e.target.value)} value={mode}>
<option value="light">{t("nav.light")}</option>
<option value="dark">{t("nav.dark1")}</option>
<option value="dark2">{t("nav.dark2")}</option> </select>



</div>
  </div>



);
}

export default Nav;
