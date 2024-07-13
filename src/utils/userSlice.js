import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    //slices for the appStore declaration

    name: 'user',
    initialState:null,

    //reducer function for the slices
    reducers: {
        addUser:(state, action) => {
            return action.payload
        },

        removeUser:(state, action) => {
            return null;
        }

    }
})

export  const {addUser, removeUser} = userSlice.action

export default userSlice.reducer;

