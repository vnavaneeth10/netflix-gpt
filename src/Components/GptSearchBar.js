import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector((store)=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center rounded-xl'>
       <form className='bg-black  bg-opacity-40 grid grid-cols-12 rounded-3xl'>

            <input 
            type='text' 
            className='p-4 m-4 col-span-9 rounded-xl font-bold' 
            placeholder={lang[langKey].gptSearchPlaceholder}
            />
            
            <button 
            className='py-2 px-4 m-4 bg-red-700 text-white rounded-xl col-span-3'>
                {lang[langKey].search}
            </button>

        </form> 
    </div>
  )
}

export default GptSearchBar