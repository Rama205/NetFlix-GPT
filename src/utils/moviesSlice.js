import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice(
    {
        name:"movies",
        initialState : {
            nowPlayingMovies :null,
            trailerVdo :null,
            popularMovies:null,
            TopRatedMovies:null,
            upComingMovies:null
        },
        reducers :{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies = action.payload
            },
            addUpComingMovies:(state,action)=>{
                state.upComingMovies = action.payload
            },
            addPopularMovies:(state,action)=>{
                state.popularMovies = action.payload
            },
            addTopRatedMovies:(state,action)=>{
                state.TopRatedMovies = action.payload
            },

            addTrailerVdos :(state,action) =>{
                state.trailerVdo = action.payload;
            }
        }
    }
)


export const {addNowPlayingMovies,addTrailerVdos,addPopularMovies,addTopRatedMovies,addUpComingMovies} =moviesSlice.actions;
export default moviesSlice.reducer;