import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        upComingMovies:null,
        trailrVideo:null,
        topRatedMovies:null,
    },

    reducers: {
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) =>{
            state.trailerVideo=action.payload;
        },
        addUpComingMovies : (state, action) =>{
            state.upComingMovies = action.payload;
        },
        addTopRatedMovies : (state, action) =>{
            state.topRatedMovies = action.payload;
        }
    }

});


export const { addNowPlayingMovies, addTrailerVideo, addUpComingMovies, addTopRatedMovies} =movieSlice.actions;
export default movieSlice.reducer;