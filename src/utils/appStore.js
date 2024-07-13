import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";

const appStore = configureStore(
    //redux store for the app

    {
        reducer: { 
            user : userReducer,
        },
        //reducer for the appStore
    }

)

export default appStore;