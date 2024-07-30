import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import moviesReducer from "./movieSlice"

const appStore = configureStore(
    //redux store for the app

    {
        reducer: { 
            user : userReducer,
            movies : moviesReducer,
        },
        //reducer for the appStore
    }

)

export default appStore;