import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS, OPENAI_KEY } from '../utils/constants'
//import openai from "../utils/openai"
import { GoogleGenerativeAI } from '@google/generative-ai';
import {useRef} from "react";
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store)=>store.config.lang)
    const searchText = useRef(null);
    const genAI = new GoogleGenerativeAI(OPENAI_KEY);


    //This will search the movie in TMDB
    const searchMovieTMDB = async (movie) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +
        "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json()

        return json.results;
    };

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        //Make an API Call to GPT API and get Movie Results
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " 
                          + searchText.current.value + 
                          ". only give me names of 5 movies, comma seperated like the example result given ahead.Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        
            const result = await model.generateContent(gptQuery);

            if(!result.response){
              //TODO: Write Error Handling
            }
            console.log(result.response.candidates[0].content.parts[0].text);

            const gptMovies = result.response?.candidates[0]?.content?.parts[0]?.text.split(",");

            console.log("gptMovies",gptMovies);
            //For each movie will search the TMDB API 

            const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie));
              //this will return 5 promises

             

            const tmdbResults = await Promise.all(promiseArray);
            console.log("data is ",tmdbResults);

            dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));

            
      
    }

  

  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center rounded-xl'>
       <form className='w-full md:w-1/2 bg-black  bg-opacity-40 grid grid-cols-12 rounded-3xl' onSubmit={(e)=>e.preventDefault()}>

            <input 
            ref={searchText}
            type='text' 
            className='p-4 m-4 col-span-9 rounded-xl font-bold' 
            placeholder={lang[langKey].gptSearchPlaceholder}
            />
            
            <button 
            className='py-2 px-4 m-4 bg-red-700 text-white rounded-xl col-span-3' 
            onClick={handleGptSearchClick}>
                {lang[langKey].search}
            </button>

        </form> 
    </div>
  )
}

export default GptSearchBar