import { Link, useParams } from "react-router-dom";
import { getMoviesById } from "../../movies-api";
import { useEffect, useState } from "react";
export default function MovieDetailsPage(){
    const {movieId}=useParams();
    const[movie, setMovie]=useState(null)
    useEffect(()=>{
      async function fetchMovieById(){
        const data = await getMoviesById(movieId);
        setMovie(data);
      }
      fetchMovieById();
    },[movieId])
    if (!movie) {
      return <div>Loading...</div>;
    }
    const userScore = Math.round(movie.vote_average * 10);
    return(
      <div>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
         <p>{movie.title}</p>
         <p>Users score:<span>{userScore}</span>%</p>
         <p>Overview:<span>{movie.overview}</span></p>
         <p>Genres: <span>{movie.genres.map(genre => genre.name).join(', ')}</span></p>
         <p>Additional information</p>
         <p><Link to={`/movies/:${movieId}/cast`}>Cast</Link></p>
         <p><Link to={`/movies/:${movieId}/reviews`}>Reviews</Link></p>
      </div>
    )
}