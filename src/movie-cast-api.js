import axios from "axios"
export const getMovieCast = async(movieId)=>{
   const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
   const options={
    headers:{
      Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDdjNWUwYjFmMzkzY2FhZWQ4YTE4YjU5ODcwYWY1MSIsIm5iZiI6MTcyNjMyODUwOS4xMzMzNTQsInN1YiI6IjY2ZGRkMWJmYjcwY2M3ZjZmZDc4ODBjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KtYxW6fL3B_hB1bQJDmBpL42hzb05yjrmBcWKXWOV4s'
    }
   }
    try{
      const response = await axios.get(url,options)
      return response.data
    }
    catch(error){
       console.log("Failed",error);
       return { cast: [] };
    }
}
