import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBG from "./VideoBG";


const MainConatiner=()=>{

    const movies = useSelector(store=>store.movies?.nowPlayingMovies);

    if(movies===null) return;

    const mainMovies = movies[0];

    const {original_title, overview, id} = mainMovies;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />

            <VideoBG movieId={id}/>
        </div>
    );



};

export default MainConatiner;