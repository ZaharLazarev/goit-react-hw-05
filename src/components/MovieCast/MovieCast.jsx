import { useEffect, useState } from "react";
import { getMovieCast } from "../../movie-cast-api"
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css"
import clsx from "clsx";
export default function MovieCast(){
  const [casts, setCasts]=useState([]);
  const{movieId}=useParams();
  useEffect(()=>{
    const fetchMovieCast = async()=>{
      const castsData=await getMovieCast(movieId);
      setCasts(castsData.cast)
    }
    fetchMovieCast();
  },[movieId])
  if(!casts){
    return(
      <div>Loading...</div>
    )
  }
  if(casts.length===0){
    return(
      <div>No casts available</div>
    )
  }
  return(
    <div>
      <ul className={clsx(css.MovieCastList)}>
         {casts.map((actor)=>(
          <li key={actor.id}>
            <img alt={actor.name} width="250px" height="300px" src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}/>
            <p>{actor.name}</p>
            <p>Character: <span>{actor.character}</span></p>
          </li>
         ))}
      </ul>
    </div>
  )
}