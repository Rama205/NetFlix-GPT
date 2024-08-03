import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const useNowPlayingMovies = ()=>{

    const dispach = useDispatch();

  const getNowPlayingMovies = async ()=>{
     const data =  await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
     const json =await data.json();

   //   console.log("------------",json.results)
     dispach(addNowPlayingMovies(json.results));
  }
  useEffect(()=>{
    getNowPlayingMovies()
   },[])
}

export default useNowPlayingMovies;