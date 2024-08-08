

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-tr from-black'>
       <h1 className='text-6xl font-bold text-white'>{title}</h1>
       <p className='py-6 text-lg w-1/4 text-white'>{overview}</p> 
       <div>
        <button className='bg-white text-black p-4 px-12 text-xl  rounded-lg w-42 hover:bg-opacity-50'>▶️ Play</button>
        <button className='bg-white text-black p-4 px-6 text-xl  rounded-lg mx-2 hover:bg-opacity-50'> ℹ️ More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle