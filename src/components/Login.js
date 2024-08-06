import {addUser} from "../utils/userSlice"
import Header from "./Header";
import { BG_URL,USER_AVATAR } from "../utils/constants";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validation";
import {auth} from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";





const Login = () => {
 
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg,setErrorMsg] = useState(null)
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null)
  const dispatch =useDispatch();

  const handleButton = () => {
    // console.log(email.current.value) ->use Ref concept
    // console.log(password.current.value)
    const msg =checkValidData(email.current.value,password.current.value);
   setErrorMsg(msg);

   if(msg) return;
    
   if(!isSignInForm){
    //sign up
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    // Signed up 
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL: USER_AVATAR
    })
    .then(() => {
      const { uid, email, displayName, photoURL } = auth.currentUser;
      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );
    //  console.log("-----kk",user)
    }).catch((error) => {
     setErrorMsg(error)
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode + "-", errorMessage)
  });

   }
   else{
    //sign in
signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
 
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setErrorMsg(errorCode + "-", errorMessage)
  });

   }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="bgImg" className="h-screen object-cover md:h-full md:w-full" src={BG_URL} />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="p-2 font-xl text-red-500">{errorMsg}</p>
        <button
          className="p-4 my-2 bg-red-800 w-full rounded-lg"
          onClick={handleButton}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Existing User Login Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
