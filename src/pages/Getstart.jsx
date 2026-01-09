import React from "react";
import { Link } from "react-router-dom";

const Getstart = () => {
  return (
    <div className="min-h-screen bg-sky-100 flex justify-center items-center fixed w-full">
      
      {/* Card */}
      <div className="w-87.5 h-112.5 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-between p-6">
        
        {/* Image */}
        <img
          src="https://bcassetcdn.com/public/blog-ms/production/sites/2/2019/07/kingfisher-2.png"
          className="w-48 h-48 object-contain mt-6"
          alt="photo1"
        />
        <h2 className=" w-full  text-center font-medium">Wellcome </h2>

        {/* Button at Bottom */}
        <Link
          to="/Home"
          className="w-full text-center py-3 mb-4 text-black text-lg font-semibold rounded-full
                      bg-linear-to-r from-sky-500 to-blue-600
                     hover:from-blue-600 hover:to-sky-500
                     transition duration-300 shadow-lg hover:scale-105"
        >
          Get Started
        </Link>

      </div>
    </div>
  );
};

export default Getstart;
