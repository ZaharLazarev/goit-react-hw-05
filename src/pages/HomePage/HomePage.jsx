import { useEffect, useState } from "react";
import {getTrends} from "../../trending-api"
import TrendList from "../../components/TrendList/TrendList";
export default function HomePage(){
  const [trends, setTrends]=useState([])
  useEffect(()=>{
    async function fetchTrends(){
      try{
        const datatOfTrends=await getTrends()
        setTrends(datatOfTrends);
      }
      catch(error){
        console.error("Failed to load",error)
      }
    }
    fetchTrends();
  },[])
  return(
    <div>
       <TrendList trends={trends}/>
    </div>
  )
}