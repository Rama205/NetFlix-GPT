
import React from 'react'
import MovieLists from './MovieLists'
import { useSelector } from 'react-redux'



const SecContainer = () => {

  const movies = useSelector((store) => store.movies);


  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieLists title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieLists title={"Top Rated"} movies={movies.TopRatedMovies} />
          <MovieLists title={"Popular"} movies={movies.popularMovies} />
          <MovieLists
            title={"Upcoming Movies"}
            movies={movies.upComingMovies}
          />
          <MovieLists title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecContainer
