import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { useEffect } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser} from "../utils/userSlice";


const Body = () => {

  const dispatch = useDispatch();
  
  //whenever you must do navigation control from inside your React component programmatically, especially when an event should trigger it based on conditions. It makes the navigation logic in your component very dynamic and sensitive to states within the application
  const appRouter = createBrowserRouter([

    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    },
    
  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email:email, displayName:displayName, photoURL:photoURL}));
        
        
      } else {
        // User is signed out
        dispatch(removeUser());
        
      }
    });
  },[]);

  return (

    <div>

      <RouterProvider router={appRouter}>
        
      </RouterProvider>
      
    </div>
  )
}

export default Body