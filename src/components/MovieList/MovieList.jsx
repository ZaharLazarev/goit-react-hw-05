import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css"
import clsx from "clsx";
export default function MovieList({movies}){
  const location=useLocation();
  return(
    <div>
      <ul className={clsx(css.MovieList)}>
         {movies.map((movie)=>(
             <li className={clsx(css.MovieListElement)} key={movie.id}><Link className={clsx(css.MovieListElementLink)} to={`/movies/${movie.id}`} state={location}>{movie.original_title}</Link></li>
         ))}
      </ul>
    </div>
  )
}