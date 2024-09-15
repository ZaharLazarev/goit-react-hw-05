import { useEffect, useState } from "react";
import {getTrends} from "../../trending-api"
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css"
import clsx from "clsx";
export default function HomePage(){
  const [trends, setTrends]=useState([])
  useEffect(()=>{
    async function fetchTrends(){
      try{
        const datatOfTrends=await getTrends()
        setTrends(datatOfTrends);
      }
      catch(error){
        console.error("Failed to load",error)
      }
    }
    fetchTrends();
  },[])
  return(
    <div>
      <p className={clsx(css.Trends)}>Trends:</p>
       <MovieList movies={trends}/>
    </div>
  )
}