

import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggession from './GPTMovieSuggession'
import {BG_URL} from "../utils/constants"


const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img alt="bgImg" src={BG_URL} className="opacity-70" />
      </div>
      <GPTSearchBar/>
      <GPTMovieSuggession/>
    </div>
  )
}

export default GPTSearch
