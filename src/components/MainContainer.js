
 import React from 'react'
import { useSelector } from 'react-redux'
import VdoTitle from './VdoTitle';
import VdoBackGround from './VdoBackGround'


 
 const MainContainer = () => {

    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[0];
  

    const { original_title,overview,id} = mainMovie;

   return (
     <div>
     <VdoTitle title ={original_title} overview={overview}/>
     <VdoBackGround movieId ={id}/>
     </div>
   )
 }
 
 export default MainContainer
 