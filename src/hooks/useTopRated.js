import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";


const useTopRated = () =>{

    //Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getTopRated = async() => {
    const data = await fetch (
      'https://api.themoviedb.org/3/movie/top_rated?page=1',
      API_OPTIONS
    );
    
    const json = await data.json();
    
    dispatch(addTopRated(json.results));
  };

  useEffect(()=>{
    getTopRated();
  },[]);

}

export default useTopRated;