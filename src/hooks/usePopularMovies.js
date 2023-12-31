import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";



const useUpComingMovies = () => {


    const dispatch = useDispatch();

    const getUpComingMovies = async () => {

        

        const data = await fetch(
            'https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);

        const json = await data.json();
        console.log("pop");
        console.log(json);
        

        dispatch(addUpComingMovies(json.results));


    }

    useEffect(()=>{
        getUpComingMovies();

    },[]);
};

export default useUpComingMovies;