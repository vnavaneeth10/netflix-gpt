import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react';
import {checkValidData} from "../utils/Validate"
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"


const Login = () => {

  const[isSignInForm,setIsSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] =useState(null);

  const email = useRef(null);
  const password = useRef(null);

  //The useRef Hook allows you to persist values between renders.

//It can be used to store a mutable value that does not cause a re-render when updated.

//It can be used to access a DOM element directly.



  const toggleSignInForm = () => {

      setIsSignInForm(!isSignInForm);
      //toggleing signin to signup and viceversa

  }

  const handleButtonClick = () =>{

      //Validate the form data
    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);
      //returning error message if validation fails

      if(message) return;

      //sign in sign up Logic
      if(!isSignInForm){

        //signup logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    console.log(user);
    
  })

  .catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
    //setting the error message

  });


      } else {

        //sign in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {

    // Signed in 
    const user = userCredential.user;
    console.log(user)

  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);

  });

      }
  }


  return (

    <div>

      <Header/>

      <div 
      className='absolute'>

      <img 
      src='https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_small.jpg' 
      alt='background-image'/>

      </div>
    
    <form 
    onSubmit={(e)=> e.preventDefault()}
        //preventDefault() method stops the default action of an element from happening
    className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-65'>

      <h1 
      className='font-bold text-white text-3xl py-4'>
        {isSignInForm ? "Sign in" : "Sign up"}
      </h1> 

      {!isSignInForm && (
      <input 
      type="Full Name" 
      placeholder='Full Name' 
      className='p-4 my-4 w-full bg-gray-800 rounded-sm'/>
      )}
       

      <input 
      ref={email}
      type="text" 
      placeholder='Email Address' 
      className='p-4 my-4 w-full bg-gray-800 rounded-sm'/>

      <input 
      ref={password}
      type="password" 
      placeholder='Password' 
      className='p-4 my-4 w-full bg-gray-800 rounded-sm'/>

      <p 
      className='text-red-600 font-bold text-lg py-2'>
      {errorMessage}
      </p>
      
      <button 
      className='p-4 my-4 bg-red-700 w-full rounded-lg' 
      onClick={handleButtonClick}>
      {isSignInForm ? "Sign in" : "Sign up"}
      </button>

      <p 
      className='py-4 cursor-pointer' 
      onClick={toggleSignInForm} >
      {isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign in."}
      </p>

    </form>

    </div>

  )
}

export default Login