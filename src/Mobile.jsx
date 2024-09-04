import React from 'react';

function Mobile() {
  return (
    <nav className="bg-zinc-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-4">
        <div className="flex items-center space-x-4">
          <a href="#home" className="text-2xl font-bold hover:text-yellow-500 transition-colors duration-300">TechStore</a>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:text-yellow-500 transition-colors duration-300">Home</a>
          <a href="#products" className="hover:text-yellow-500 transition-colors duration-300">Products</a>
          <a href="#about" className="hover:text-yellow-500 transition-colors duration-300">About</a>
          <a href="#contact" className="hover:text-yellow-500 transition-colors duration-300">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#login" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">Login</a>
          <a href="#signup" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">Sign Up</a>
        </div>
        <button className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Mobile;
