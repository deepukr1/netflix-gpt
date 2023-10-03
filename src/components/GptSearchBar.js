import { useRef } from "react";
import openai from "../utils/openai.js";


const GptSearchBar = () =>{

    const searchText=useRef(null);

    const handleGPTSearchClick = async () =>{
        console.log(searchText.current.value);

        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: searchText.current.value }],
            model: 'gpt-3.5-turbo',
          });

          console.log(gptResult.choices);



    }

    return (

    <div className="pt-[10%] flex justify-center">
        
        <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) =>e.preventDefault()}>
            <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder="What would you like to watch today?" />
            <button className="py-2 px-6 m-4  bg-red-700 text-whitel rounded-lg col-span-3" onClick={handleGPTSearchClick}>Search</button>
        </form>
    </div>
    )

}

export default GptSearchBar;