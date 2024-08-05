
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useUpComingMovies from '../customHooks/useUpComingMovies';
import GPTSearch from './GPTSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecContainer from './SecContainer';


const Browse = () => {
  const showGPTSearch =useSelector((store)=>store.GPT.showGPTSearch);


  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div>
      <Header />
      {showGPTSearch ? <GPTSearch /> : <><MainContainer/>
      <SecContainer /> </> }
      
     
    </div>
  )
}

export default Browse
