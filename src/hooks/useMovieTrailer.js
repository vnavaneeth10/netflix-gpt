import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer=(movieId)=>{
    //fetch Trailer video & updating the store with trailer video data
    const dispatch = useDispatch();
    console.log("movieId",movieId);

const getMovieVidoes = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId  + '/videos?language=en-US', API_OPTIONS)
  
    const json = await data.json();
    console.log("json",json);
  
    
    const filterData = json.results.filter(video => video.type === "Trailer");
    console.log("filterData",filterData)
    const trailer = filterData.length ? filterData[0] : json.results[0];
    
    dispatch(addTrailerVideo(trailer))
  }
  
  useEffect(()=>{
      getMovieVidoes();
  },[])
}

export default useMovieTrailer