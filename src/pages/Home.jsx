import React from 'react';

function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/carrent.png')] bg-cover bg-center bg-no-repeat"></div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4 -my-20">
        <div className="sm:max-w-[480px] lg:max-w-[800px] md:max-w-[700px] mx-4">
          <h1 className="text-4xl font-bold mb-4">Discover Your Perfect Ride</h1>
          <p className="text-lg mb-8">
            Experience the freedom of the open road with our wide selection of rental cars. Whether you need a compact car for city driving or a spacious SUV for a family adventure, we have the perfect vehicle for you. Start your journey today with our easy and convenient rental process.
          </p>
        </div>
        <button className="bg-[#ffad6e] tracking-widest text-white p-2 rounded-md text-xl font-bold px-40 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#ff7f3f] hover:shadow-lg">
  Rent a Car
</button>
      </div>
    </div>
  );
}

export default Home;
