import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Vans() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVehicles(data.vans));
  }, []);

  const vehicleElements = vehicles.map(vehicle => (
    <div key={vehicle.id} className=" sm:m-3 sm:w-[80%] md:w-5/6  lg:w-5/6 xl:w-5/6  border border-black border-spacing-1 rounded-lg overflow-hidden">
    <Link to={`/vehicles/${vehicle.id}`}>
      <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full h-auto object-cover" />
      <div className="text-center p-2">
        <h3 className="mt-2 text-lg font-semibold">{vehicle.name}</h3>
        <p className="text-sm font-bold">${vehicle.price}<span className="font-normal">/day</span></p>
        <i className={`inline-block mt-1 px-4 py-2 rounded text-sm font-medium ${
            vehicle.type === 'simple' ? 'bg-gray-400 text-white' : 
            vehicle.type === 'rugged' ? 'bg-blue-700 text-white' : 
            vehicle.type === 'luxury' ? 'bg-yellow-500 text-white' : ''
        }`}>{vehicle.type}</i>
      </div>
        </Link>
    </div>
  ));

  return (
    <>
      <div className="m-4 relative top-4 p-4 rounded-lg">
        <h1 className="font-bold text-lg mb-2">Explore our van options</h1>
        <div className="flex flex-wrap space-x-2">
          <button className="bg-[#ffedcc] text-black py-2 px-4 rounded-md shadow-sm hover:bg-[#ffd8a8] transition">
            Simple
          </button>
          <button className="bg-[#ffedcc] text-black py-2 px-4 rounded-md shadow-sm hover:bg-[#ffd8a8] transition">
            Luxury
          </button>
          <button className="bg-[#ffedcc] text-black py-2 px-4 rounded-md shadow-sm hover:bg-[#ffd8a8] transition">
            Rugged
          </button>
          <button className="text-gray-600 py-2 px-4 underline hover:text-black transition">
            Clear filters
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mx-6 sm:py-2" >
        {vehicleElements}
      </div>
    </>
  );
}

export default Vans;
