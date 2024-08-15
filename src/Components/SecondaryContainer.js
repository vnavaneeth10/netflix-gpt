import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies)

  return (

    movies.nowPlayingMovies && (

  <div className='bg-black'>
    <div className='mt-0 md:-mt-[51] pl-4 md:pl-12 relative z-20'>

      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRated}/>
      <MovieList title={"Upcoming"} movies={movies.upComing}/>
      
    </div>
  </div>

    )
  )
}

export default SecondaryContainer