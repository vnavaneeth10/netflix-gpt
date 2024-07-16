import { createSlice } from "@reduxjs/toolkit";
//importing slice from @reduxjs/toolkit

const userSlice = createSlice({
    //slices for the appStore declaration

    name: 'user',
    initialState:null,

    //reducer function for the slices

    reducers: {
        addUser:(state, action) => {
            return action.payload;
        },

        removeUser:(state, action) => {
            return null;
        }

    }
})

export  const {addUser, removeUser} = userSlice.actions
//exporting each reducers from slices

export default userSlice.reducer;

