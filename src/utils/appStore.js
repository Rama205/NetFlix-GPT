import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import addTrailerReducer from "./moviesSlice"


const  appStore = configureStore(
    {
        reducer :{
            user:userReducer,
            movies:moviesReducer,
            trailer :addTrailerReducer
        }
    }
);

export default appStore;