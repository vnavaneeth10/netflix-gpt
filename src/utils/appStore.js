import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from './gptSlice';
import configReducer from './configSlice'

const appStore = configureStore(
    //redux store for the app

    {
        reducer: { 
            user : userReducer,
            movies : moviesReducer,
            gpt : gptReducer,
            config: configReducer,
        },
        //reducer for the appStore
    }

)

export default appStore;