import React,{useState} from 'react'
import { Link } from "react-router-dom";


const SignUp = () => {
   const[email,setEmail]=useState('');
   const[password,setPassword]=useState('');
   const[confirmPassword,setConfirmPassword]=useState('');

   const handleSubmit=(e)=>{
    e.preventDefault();

    
    if(password !== confirmPassword){
      alert("Passwords do not match!");
      return;
    }
     const user={email,password};
     localStorage.setItem("user",JSON.stringify(user));
     alert("signup successfull! you can now login ");
       setEmail('');
  setPassword('');
  setConfirmPassword('');
};



    console.log("Email:",email);
    console.log("Password:",password);
    console.log("Confirm Password:",confirmPassword);
  
   
  return (
    <div className='min-h-screen bg-sky-100 flex items-center   justify-center mb-0 fixed w-full '>
   <div className='w-[320px] h-140 bg-white rounded-3xl shadow-xl p-5 py-2 mb-30 lg:mb-5 flex flex-col item-center  fixed '>

    <h1 className='text-2xl font-semibold text-gray-800 mb-1 text-center justify-between'>
        Sign up
    </h1>

    <p className='text-sm text-gray-600 mb-5 text-center justify-between'>Create an account it's free</p>
    <div className='w-full h-40 bg-sky-50 rounded-xl mb-6 flex items-center justify-center text-sky-300 '>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input type="email" placeholder='Email ' className=' w-full border-b  border-gray-300 font-light py-2 text-sm outline-none focus:border-sky-400 mb-4'
        value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password ' className=' w-full border-b  border-gray-300 font-light py-2 text-sm outline-none focus:border-sky-400 mb-6'
        value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type="password" placeholder='Confirm password ' className=' w-full border-b  border-gray-300 font-light py-2 text-sm outline-none focus:border-sky-400 mb-8'
        value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
      <p className='text-center justify-center py-2 mb-10'>Already Signup?<Link to="/login" className='text-purple-600 font-semibold ml-1 cursor-pointer'>Login</Link></p>
  <button className='w-full py-3 justify-between text-center mt-0 mb-10 bg-sky-300 rounded-2xl hover:bg-orange-200 font-medium transition '>Sign up</button>
      </form>
     
    </div>
    </div>
  )


}
export default SignUp
