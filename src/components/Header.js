import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

import { netflixlogo } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = ()=>{

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const user = useSelector(store =>store.user);

    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

    const handleSignOut = () =>{
        signOut(auth).then(() =>{
        }).catch((error)=>{
            navigate("/error");
        })
    };

    useEffect(() =>{

        const unSubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {

                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid:uid, 
                        email:email, 
                        displayName:displayName, 
                        photoURL:photoURL,
                    })
                    );
                    navigate("/browse");
                
            } else {
                dispatch(removeUser());
                navigate("/");
                

            }
        });
        return () => unSubscribe();

    }, []);


    const handleGptSearchClick = () =>{

        dispatch(toggleGptSearchView())


    }

    
    return (
        <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between" >

            <img
            className="w-44"
            src = {netflixlogo}
            alt = "logo"/>

            {user && (
            <div className="flex p-2">
                <button className="text-slate-50 py-2 px-4 m-2 bg-red-500 rounded-lg"
                onClick={handleGptSearchClick}
                >{showGptSearch?"HomePage":"GPTSearch"}</button>
                <img className="w-12 h-12" alt="mypic" src={user?.photoURL} />
                <button onClick={handleSignOut} className="font-bold text-white ">(Sign out)</button>
            </div>

            )}

        </div>

    
    );
};

export default Header;