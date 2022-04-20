import React, {useState,useEffect,useContext} from "react"; 
import"../styles/Details.css"
import Axios from "axios";
import { NewsContext } from "../Context/NewsContext";

function Details() {
    const [news, setNews]= useState([]);
    const {number}= useContext(NewsContext);
    useEffect( ()=>{
        const getNews =async()=>{
        const response= await Axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=152fe400cfec431b8701339385b28ec0");
        setNews(response.data.articles[number]);
  };

        getNews();
    },[])
return(
  <div id="details">
  <p className="title"> {news.author}: {news.title}</p>
  <p className="pub">Publish Date: {news.publishedAt}</p>
  <img src={news.urlToImage} alt={news.title}/>
 <p className="content">{news.content}</p>
 <a  target="_blank" rel="noreferrer" href={news.url}>Link to article</a>
  </div>



);
}

export default Details;
