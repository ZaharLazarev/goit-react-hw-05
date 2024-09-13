import axios from "axios";

export const getTrends=async()=>{
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

  const options = {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDdjNWUwYjFmMzkzY2FhZWQ4YTE4YjU5ODcwYWY1MSIsIm5iZiI6MTcyNjA1Nzk4OS4yMzk1NDYsInN1YiI6IjY2ZGRkMWJmYjcwY2M3ZjZmZDc4ODBjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.suMA3YJ9q_8EI4vbYkGeLDiQ98MBpwmfQR7Ui64oqnI'
    }
  };
  try{
    const response = await axios.get(url,options)
    return response.data.results
  }
  catch(error){
    console.error("Failed",error);
    return[];
  }
}