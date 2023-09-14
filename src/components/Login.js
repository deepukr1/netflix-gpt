import Header from "./Header";
import { useState } from "react";

const Login = ()=>{

    const [isSignInForm, setIsSignInForm] = useState(true);


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
          <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="font-bold text-2xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm &&(<input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-slate-700 rounded-lg"/>)}
            <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-slate-700 rounded-lg"/>
            
            <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-slate-700 rounded-lg"/>
            <button className="p-4 my-4 bg-red-600 w-full rounded-lg">{isSignInForm? "Sign In" : "Sign Up"}</button>
            <p className="p-4 my-4 cursor-pointer hover:text-teal-400" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
          </form>

        </div>
    );
};

export default Login;