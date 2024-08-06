import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants'
import React, { useRef } from 'react';
import openai from '../utils/openAI'

const GPTSearchBar = () => {
    const searchMoves = useRef(null);

    const langKey =useSelector((store)=>store.config.lang)
    const handleGPTSearchClick = async () =>{
        console.log(searchMoves.current.value)
        //API call to OPEn GPT

        const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchMoves.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const GPTResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
        console.log("===========",GPTResults.choices)
    }

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchMoves}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].GPTSearchPlaceHolder}
        />
        <button className="py-2 col-span-3 px-4 m-4 rounded-lg bg-red-700 text-white"
        onClick={handleGPTSearchClick}>
         {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar
