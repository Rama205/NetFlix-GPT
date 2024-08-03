import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice(
    {
        name:"movies",
        initialState : {
            nowPlayingMovies :null,
            trailerVdo :null,
        },
        reducers :{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies = action.payload
            },
            addTrailerVdos :(state,action) =>{
                state.trailerVdo = action.payload;
            }
        }
    }
)


export const {addNowPlayingMovies,addTrailerVdos} =moviesSlice.actions;
export default moviesSlice.reducer;