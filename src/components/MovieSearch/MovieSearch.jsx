import { useSearchParams } from "react-router-dom";
export default function MovieSearch(){
   const [params, setParams]=useSearchParams();
   const handleSubmit=(e)=>{
     e.preventDefault();
     params.set("movieSearch",e.target.elements.movieSearch.value);
     setParams(params);
     e.target.reset();
   }
   return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="movieSearch"/>
      <button type="submit">Search</button>
    </form>
   )
}