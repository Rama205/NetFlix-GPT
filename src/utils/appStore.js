import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import addTrailerReducer from "./moviesSlice";
import GPTReducer from "./GPTSlice";
import ConfigReducer from "./configSlice"

const  appStore = configureStore(
    {
        reducer :{
            user:userReducer,
            movies:moviesReducer,
            trailer :addTrailerReducer,
            GPT:GPTReducer,
            config :ConfigReducer
        }
    }
);

export default appStore;