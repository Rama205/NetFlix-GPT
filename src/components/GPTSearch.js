

import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggession from './GPTMovieSuggession'
import {BG_URL} from "../utils/constants"


const GPTSearch = () => {
  return (
   <>
   
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-full md:w-full opacity-70" alt="bgImg" src={BG_URL} />
      </div>
      <div>
      <GPTSearchBar/>
      <GPTMovieSuggession/>
      </div>
   </>
  )
}

export default GPTSearch
