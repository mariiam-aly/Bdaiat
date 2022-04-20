import React, {useState,useEffect,useContext} from "react"; 
import"../styles/Home.css"
import Axios from "axios";
import NewsCard from "../Components/NewsCard";
import { AiOutlineSearch } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { LangContext } from "../Context/LangContext";
function Home() {
  const { t} = useTranslation();
    const [news, setNews]= useState([]);
    const {lang}= useContext(LangContext);
const [searchTerm,SetSearchTerm]=useState('');
    useEffect( ()=>{
        const getNews =async()=>{
        const response= await Axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=152fe400cfec431b8701339385b28ec0");
        setNews(response.data.articles);
    console.log(response.data.articles)};
        getNews();
    },[])
return(
  <div id="main">
  <div id="top" >
  <AiOutlineSearch  className={lang? "srch":"srch srchar"}/>
  <input className="search" type="text" placeholder={t("home.search")} onChange={(e)=>SetSearchTerm(e.target.value)}/></div>
  <div style={{marginTop:"40px"}} className="container ">
  <div className="row gy-5">
  {news && news.filter((data)=>{
    if(searchTerm===""){
        return data;
    } 
    else if(data.title.toLowerCase().includes(searchTerm.toLowerCase())|| data.author.toLowerCase().includes(searchTerm.toLowerCase()) || data.description.toLowerCase().includes(searchTerm.toLowerCase())|| data.content.toLowerCase().includes(searchTerm.toLowerCase())){
return data;
   }
 }).map((data,key) =>

  <NewsCard index={key} key={key} image={data.urlToImage} title={data.title}/>
  
)}

</div>
</div>
  </div>



);
}

export default Home;
