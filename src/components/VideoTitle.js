

const VideoTitle = ({title, overview}) =>{


    return (
        <div className="w-screen aspect-video pt-[22%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="text-lg py-6 w-1/4">{overview}</p>
            <div className="">
                <button className="bg-white text-black p-3 px-12 text-xl  rounded-md hover:bg-opacity-80">
                    ▶️ Play</button>
                <button className=" mx-3 bg-gray-600 text-white p-3 px-9 text-xl  rounded-md hover:bg-opacity-80"> ℹ️ More Info</button>
            </div>

        </div>
    )

};

export default VideoTitle;