import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
<div className='min-h-screen bg-sky-100 flex items-center   justify-center mb-0 fixed w-full '>
   <div className='w-[320px] h-140 bg-white rounded-3xl shadow-xl p-5 py-2 mb-30 lg:mb-5 flex flex-col item-center  fixed '>
    <h1 className='text-2xl font-semibold text-gray-800 mb-1 text-center justify-between'>
        Wellcome
    </h1>
    <p className='text-sm text-gray-400 mb-5 text-center justify-between'>Here you log in securely</p>
    <div className='w-full h-40 bg-sky-50 rounded-xl mb-6 flex items-center justify-center text-sky-300 '>
        <img src="https://static.vecteezy.com/system/resources/previews/057/227/882/non_2x/a-man-sitting-on-a-bean-bag-chair-with-a-laptop-free-png.png"alt="photo"
        className='items-cover flex  px-10 mt-20 bg-bottom '/>

    </div>
    <Link to="/login" className='w-full py-3 justify-center text-center mt-10 bg-sky-300 rounded-2xl hover:bg-orange-100 font-medium transition '>Login</Link>
    <Link to="/signup" className='w-full py-3 justify-between text-center mt-10 bg-sky-300 rounded-2xl hover:bg-orange-200 font-medium transition '>Sign up</Link>
        </div>
       
        
    
    </div>
  )
}

export default Home
