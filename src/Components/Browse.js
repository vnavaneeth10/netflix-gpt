import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import useTopRated from "../hooks/useTopRated"
import useUpComing from "../hooks/useUpComing"
import { useSelector } from "react-redux";

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useNowPlayingMovies(); //custom hooks
  usePopularMovies(); //custom hooks
  useTopRated(); //custom hooks
  useUpComing(); //custom hooks

  
  
  return (

    <div>
      <Header />
      {
        showGptSearch ? ( <GptSearch/> ) : (
          <>
          <MainContainer />
          <SecondaryContainer />
          </>
        )
      }
      
      
      {/* 
          MainContainer
            -VideoBackground
            -VideoTitle
          SecondaryContainer
            -MoviesList * n
              -cards * n
       */}
    </div>
      
    
    
  )
}

export default Browse