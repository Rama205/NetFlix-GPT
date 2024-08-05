import React from "react";
import { LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleGPTSearchView } from "../utils/GPTSlice";
import {LANGUAGE_SUPPORT} from "../utils/constants";
import {changeLanguage} from "../utils/configSlice"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
const  showGPTSearch = useSelector((store)=>store.GPT.showGPTSearch)

  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView());
  };
const HandleLanguageChange =(e) =>{
 dispatch(changeLanguage(e.target.value))
}

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-36" alt="logo" src={LOGO} />
      {user && (
        <div className="flex p-2">


          {showGPTSearch && (
            <select className="p-2 bg-blue-500 text-white m-2 rounded-lg"
            onChange={HandleLanguageChange}>
              {LANGUAGE_SUPPORT.map((lang)=>  <option  key ={lang.identifier} 
              value={lang.identifier}>{lang.name}</option>)}
            </select>
          )}
          
          <button
            className="p-2 m-2 bg-blue-500 text-white rounded-lg"
            onClick={handleGPTSearch}
          >
          {showGPTSearch ? "Home" : "GPT Serach"}
          </button>
          <img alt="userIcon" className=" w-10 h-10" src={user?.photoURL} />  
          <button onClick={HandleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
