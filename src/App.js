import React, {useState} from "react";
import './App.scss'
import {Route} from"react-router-dom"
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { NewsContext } from "./Context/NewsContext";
import{ModeContext} from  "./Context/ModeContext";
import { LangContext } from "./Context/LangContext";
function App() {
   const [number,setNumber] =useState(0);
   const [mode,setMode] =useState("");
   const [Language, SetLanguage]=useState(true);
return(
  <div className={mode}>
  <LangContext.Provider value={{Language, SetLanguage}}>
  <ModeContext.Provider value={{mode,setMode}}>
<Nav/>
</ModeContext.Provider>
<NewsContext.Provider value={{number,setNumber}}>
<Route exact path="/" component={Home} />
<Route exact path="/det" component={Details} />
</NewsContext.Provider>
</LangContext.Provider>
  </div>



);
}


export default App;
