import useTrailerData from '../customHooks/useTrailerData'
import {useSelector} from 'react-redux'

const VdoBackGround = ({movieId}) => {

  const trailerVdo = useSelector((store)=>store.movies?.trailerVdo)
  useTrailerData(movieId);

  return (
    <div className='w-screen'>
      <iframe
       className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + trailerVdo?.key +"?&autoplay=1&mute=1"}
        title="YouTube video player"
       referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VdoBackGround
