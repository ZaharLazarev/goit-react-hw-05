import { useEffect,useState } from "react";
import {getMovies} from '../../movies-api'
import MovieList from "../../components/MovieList/MovieList";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import { useSearchParams } from "react-router-dom";
export default function MoviesPage(){

const[movies,setMovies]=useState([]);
const [params]=useSearchParams();
const movieSearch=params.get("movieSearch")??""

useEffect(()=>{
  async function fetchMovies(){
    const dataOfMovies=await getMovies(movieSearch)
    setMovies(dataOfMovies)
  }
  fetchMovies();
}, [movieSearch])
  return(
    <div>
      <MovieSearch/>
      {movies.length>0&&<MovieList movies={movies}/>}
    </div>
  )
}