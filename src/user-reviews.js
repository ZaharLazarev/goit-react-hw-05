import axios from "axios";
export const getMovieReviews= async(movie_id)=>{
   const url=`https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1&per_page=3`
   const options={
    headers:{
      Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDdjNWUwYjFmMzkzY2FhZWQ4YTE4YjU5ODcwYWY1MSIsIm5iZiI6MTcyNjMyODUwOS4xMzMzNTQsInN1YiI6IjY2ZGRkMWJmYjcwY2M3ZjZmZDc4ODBjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KtYxW6fL3B_hB1bQJDmBpL42hzb05yjrmBcWKXWOV4s'
    }
   };
   try{
     const response=await axios.get(url,options);
     return response.data.results
   }
   catch(error){
    console.error("Failed",error);
    return[];
   }

}