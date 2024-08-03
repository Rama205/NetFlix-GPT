import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVdos } from "../utils/moviesSlice";
import { useDispatch,useSelector } from 'react-redux'


const  useTrailerData =(movieId) =>{

const dispatch = useDispatch()
const getMovieVdos = async () => {

  const data = await fetch(
    "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
    API_OPTIONS
  );
  const json = await data.json();

  const filterData = json.results.filter((video) => video.type === "Trailer");
  const trailer = filterData.length ? filterData[0] : json.results[0];

  dispatch(addTrailerVdos(trailer));
}; 
useEffect(()=>{
  getMovieVdos();
},[])
}

export default useTrailerData;