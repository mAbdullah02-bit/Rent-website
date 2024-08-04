import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen
     bg-beige">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-center text-gray-800">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link 
        to="/" 
        className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-md text-lg font-semibold"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound;
