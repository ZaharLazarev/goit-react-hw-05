import { Link } from "react-router-dom";
export default function TrendList({trends}){
  return(
    <div>
      <ul>
        {trends.map((trend)=>(
          <li key={trend.id}><Link to={`/movies/${trend.id}`}>{trend.original_title}</Link></li>
        ))}
      </ul>
    </div>
  )
}