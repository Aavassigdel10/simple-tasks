import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
const handleSubmit = (e) => {
  e.preventDefault();

  // Get signup data from localStorage
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    alert("No account found. Please sign up first.");
    return;
  }

  const parsedUser = JSON.parse(storedUser);

  // Compare email & password
  if (
    email.trim() === parsedUser.email &&
    password === parsedUser.password
  ) {
    alert("Login successful!");
  } else {
    alert("Invalid email or password");
  }

  // Clear fields
  setEmail('');
  setPassword('');
};


  return (
 <div className='min-h-full bg-sky-100 flex items-center justify-center w-full  fixed px-12  '>

  <div className='w-[320px] h-160 bg-white rounded-4xl shadow-xl p-10 -translate-y-2 mt-20  flex flex-col items-center  min-h-100vh '>
        
        <h2 className='font-bold text-2xl mb-2'>Login</h2>

        <p className="text-sm text-gray-500 mb-6">
          Don't have an account?
          <Link to="/signup" className="text-purple-600 font-semibold ml-1 cursor-pointer">
            Sign up
          </Link>
        </p>

        <form onSubmit={handleSubmit} className='flex flex-col w-full items-start'>
          <input 
            type="email" 
            placeholder=' Email' 
            className='w-full border-2 rounded-2xl border-gray-300 font-normal py-2 px-4 outline-none focus:border-sky-400 mb-4' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input 
            type="password" 
            placeholder=' Password' 
            className='w-full border-2 rounded-2xl border-gray-300 font-light py-2 px-4 text-sm outline-none focus:border-sky-400 mb-6'
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button 
            type="submit" 
            className='w-full text-center bg-purple-600 text-white font-semibold py-2 rounded-2xl hover:bg-purple-700 transition duration-300 cursor-pointer'
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
}

export default Login;