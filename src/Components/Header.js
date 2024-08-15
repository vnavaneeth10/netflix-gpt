import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store=> store.user)
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
  
  const handleSignOut = () =>{

    signOut(auth).then(() => {
      // Sign-out successful.
     //navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }

  useEffect(()=>{

   const unsubscribe =  onAuthStateChanged(auth, (user) => {

      if (user) {
        const {uid, email, displayName, photoURL} = user;

        dispatch(addUser({uid: uid, email:email, displayName:displayName, photoURL:photoURL}));
        navigate("/browse")

      } else {

        // User is signed out
        dispatch(removeUser());
        navigate("/");
        
      }
    });

    //unsubscribe when component unmounts
    return () =>  unsubscribe();
  },[]);

  const handleGptSearchClick = () =>{
      //Toggle GPT Search
      dispatch(toggleGptSearchView());

  }

  const handleLanguageChange =(e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  
  return (

    <div 
    className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>

      <img 
      className='w-44 mx-auto md: max-0' 
      src={LOGO} 
      alt='Logo'/>

      {user && (

        <div className='flex p-2 justify-between'>
          
          {showGptSearch && 
          <select 

          className='p-2 m-2 bg-gray-900 text-white' 
          onChange={handleLanguageChange}>

            {
            
            SUPPORTED_LANGUAGES.map((lang)=> 

            <option 
            key={lang.identifier} 
            value={lang.identifier}>
            {lang.name}
            </option>)}
          
          </select>
          
          }

          <button 

          className='py-2 px-4 mx-4 my-2 bg-purple-800 rounded-lg text-white font-bold'
          onClick={handleGptSearchClick}
          >
            {
            showGptSearch ? 
            "Home" : "GPT Search"
            }

          </button>

        <img 
        className='hidden md:block w-12 h-12'
        alt='user avatar' 
        src= {user?.photoURL} />
      
      <button 
      onClick={handleSignOut} 
      className='font-bold text-white'>
        (Sign Out)
      </button>

      </div>
      )}

    </div>
      

  )
}

export default Header