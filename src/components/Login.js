import Header from "./Header";
import { useState, useRef } from "react";

import { ValidData } from "../utils/validate";

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = ()=>{

    const [isSignInForm, setIsSignInForm] = useState(true);

    const [errMessage, setErrMessage] = useState(null)
    const navigate =useNavigate();

    const dispatch = useDispatch();



    const name = useRef(null);


    const email = useRef(null);

    const password = useRef(null);


    const handleButtonClick = ()=>{

      

      const message = ValidData(email.current.value, password.current.value);

      setErrMessage(message);


      if(message) return;

    

      if(!isSignInForm){

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
  

          
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/103107649?v=4",
            }).then(()=>{

              const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                    addUser({
                        uid:uid, 
                        email:email, 
                        displayName:displayName, 
                        photoURL:photoURL,
                    })
                    );

              navigate("/browse");

            }).catch((error)=>{

              setErrMessage(error.message);
            });

            console.log(user);
            

        })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            setErrMessage(errorCode +"-"+ errorMessage);
        });

      }
      else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {


          
          const user = userCredential.user;

          console.log(user);
          navigate("/browse")

      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrMessage(errorCode +"-"+ errorMessage);
      });


      }

    };


    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);

    }
    return (
        <div>
         <Header />
          <div className="absolute">

         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="logo"/>

          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="font-bold text-2xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm &&(<input ref={name} type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-slate-700 rounded-lg"/>)}
            <input ref={email} type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-slate-700 rounded-lg"/>
            
            <input ref={password} type="password" placeholder="Password" autoComplete="on" className="p-2 my-4 w-full bg-slate-700 rounded-lg"/>
            <p className="text-red-600 text-lg">{errMessage}</p>
            <button className="p-4 my-6 bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up"}</button>
            <p className="p-4 my-4 cursor-pointer hover:text-teal-400" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
          </form>

        </div>
    );
};

export default Login;