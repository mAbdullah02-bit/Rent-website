import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/mountain.png')] h-full bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div className="max-w-[320px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[800px] mx-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Discover Your Perfect Ride
          </h1>
          <p className="text-base sm:text-lg mb-8">
            Experience the freedom of the open road with our wide selection of rental cars. Whether you need a compact car for city driving or a spacious SUV for a family adventure, we have the perfect vehicle for you. Start your journey today with our easy and convenient rental process.
          </p>
        </div>
        <NavLink to="/vehicles" className="bg-[#ffad6e] tracking-widest text-white p-2 rounded-md text-lg sm:text-xl font-bold px-20 sm:px-40 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#ff7f3f] hover:shadow-lg">
          Rent a Car
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
