import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComing } from "../utils/movieSlice";
import { useEffect } from "react";


const useUpComing = () =>{

    //Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const upComing = useSelector(store => store.movies.upComing)

  const getUpComing = async() => {
    const data = await fetch (
      'https://api.themoviedb.org/3/movie/upcoming?page=1',
      API_OPTIONS
    );
    
    const json = await data.json();
    
    dispatch(addUpComing(json.results));
  };

  useEffect(()=>{
    !upComing &&
    getUpComing();
  },[]);

}

export default useUpComing;