import { useEffect, useState } from "react"
import { getMovieReviews } from "../../user-reviews"
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css"
import clsx from "clsx";
export default function MovieReviews(){
  const {movieId}=useParams()
  const [reviews, setReviews]=useState([]);
  useEffect(()=>{
    const fetchReviews = async(id)=>{
        const reviewsData = await getMovieReviews(movieId)
        setReviews(reviewsData)
    }
    fetchReviews();
  },[movieId])
  if(!reviews){
    return(<div>Loading...</div>)
  }
  if(reviews.length===0){
    return(<div>No reviews available</div>)
  }

  return(
    <div>
      <ul className={clsx(css.MovieReviewsList)}>
        {reviews.map((review)=>(
           <li key={review.id}>
             <p>Author: <span className={clsx(css.MovieReviewsAuthor)}>{review.author}</span></p>
             <p className={clsx(css.MovieReviewsContent)}>{review.content}</p>
           </li>
        ))}
      </ul>
    </div>
  )
}