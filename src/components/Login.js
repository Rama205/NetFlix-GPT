
import React from 'react';
import Header from './Header';
import {BG_URL} from '../utils/constants';
import {useState} from 'react';


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignInForm=() =>{
     setIsSignInForm(!isSignInForm)
  }


  return (
    <div>
   <Header/>
   <div className='absolute'>
    <img alt='bgImg' src={BG_URL}/>
   </div>
   <form className=' w-3/12 absolute p-12 bg-black mx-auto my-36 right-0 left-0 text-white  rounded-lg bg-opacity-80'>
   <h1 className='font-bold text-2xl py-4'>{isSignInForm ?"Sign In" : "Sign Up"}</h1>
  {!isSignInForm &&  (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>)}
    <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
    <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
    <button className='p-4 my-2 bg-red-800 w-full rounded-lg'>{isSignInForm ?"Sign In" : "Sign Up"} </button>
    <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now" :"Existing User Login Now"}
      </p>
   </form>
    </div>
  )
}

export default Login
