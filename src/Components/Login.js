import React from 'react'
import Header from './Header'

const Login = () => {

  const [] = useState();

  const toggleSignInForm = () => {

  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_small.jpg' alt='background-image'/>
      </div>
    
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-50'>
      <h1 className='font-bold text-white text-3xl py-4'>Sign In</h1>  
      <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800 rounded-sm'/>
      <input type="text" placeholder='Password' className='p-4 my-4 w-full bg-gray-800 rounded-sm'/>
      <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>Signin</button>
      <p className='py-4' onClick={toggleSignInForm}>New to Netflix? Sign up now.</p>
    </form>
    </div>
  )
}

export default Login