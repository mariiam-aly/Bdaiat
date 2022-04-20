import React, {useState} from "react";
import './App.scss'
import {Route} from"react-router-dom"
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { NewsContext } from "./Context/NewsContext";
import{ModeContext} from  "./Context/ModeContext";
function App() {
   const [number,setNumber] =useState(0);
   const [mode,setMode] =useState("");
return(
  <div className={mode}>
  <ModeContext.Provider value={{mode,setMode}}>
<Nav/>
</ModeContext.Provider>
<NewsContext.Provider value={{number,setNumber}}>
<Route exact path="/" component={Home} />
<Route exact path="/det" component={Details} />
</NewsContext.Provider>
  </div>



);
}


export default App;
