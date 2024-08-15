

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-tr from-black'>
       <h1 className='text-2xl md:text-6xl font-bold text-white'>{title}</h1>
       <p className='hidden md:inline-block py-6 text-lg w-1/4 text-white'>{overview}</p> 
       <div className="my-4 md:m-0">
        <button className='bg-white text-black py-1 md:py-4 px-2  md:px-12 text-xl  rounded-lg w-42 hover:bg-opacity-50'>▶️ Play</button>
        <button className='hidden md:inline-block bg-white my-4 text-black p-4 px-6 text-xl  rounded-lg mx-2 hover:bg-opacity-50'> ℹ️ More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle