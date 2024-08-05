import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants'
import React from 'react'

const GPTSearchBar = () => {

    const langKey =useSelector((store)=>store.config.lang)

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-slate-700  grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].GPTSearchPlaceHolder}
        />
        <button className="py-2 col-span-3 px-4 m-4 rounded-lg bg-red-700 text-white">
         {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar
