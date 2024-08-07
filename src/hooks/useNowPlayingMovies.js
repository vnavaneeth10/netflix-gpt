import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () =>{

    //Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getNowPlaying = async() => {
    const data = await fetch (
      'https://api.themoviedb.org/3/movie/now_playing?page=1', 
      API_OPTIONS
    );
    
    const json = await data.json();
    
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(()=>{
    getNowPlaying();
  },[]);

}

export default useNowPlayingMovies;