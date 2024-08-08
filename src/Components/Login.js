
import Header from './Header'
import { useState, useRef } from 'react';
import {checkValidData} from "../utils/Validate"
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {

  const[isSignInForm,setIsSignInForm] = useState(true);
  const[errorMessage, setErrorMessage] =useState(null);

  //const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
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
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL: USER_AVATAR,
    }).then(() => {

      const 
        {uid, 
        email, 
        displayName, 
        photoURL} = auth.currentUser;

        dispatch(addUser({uid: uid, 
          email:email, 
          displayName:displayName, 
          photoURL:photoURL}));
        

      // Profile updated!
      //navigate("/browse");

    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message);
    });

    
    //navigate("/browse");
    
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
    
    // navigate("/browse");
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
      src={BG_URL} 
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