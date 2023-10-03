import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { NetflixBg } from "../utils/constant";

const GptSearch = () =>{

    return (
        <div>
            <div className="absolute -z-10">
                <img src={NetflixBg}
                alt="logo"/>
             </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )


}

export default GptSearch;