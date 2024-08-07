import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getvehicles } from '../api';

function Vans() {
  const [vehicles, setVehicles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const typeFilter = searchParams.get("type");

  const displayVans = typeFilter
    ? vehicles.filter((vehicle) => vehicle.type === typeFilter)
    : vehicles;

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      setError(null);
      try {
        const data = await getvehicles();
        setVehicles(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  const vehicleElements = displayVans.map((vehicle) => (
    <div key={vehicle.id} className="sm:m-3 sm:w-[80%] md:w-5/6 lg:w-5/6 xl:w-5/6 border border-black border-spacing-1 rounded-lg overflow-hidden">
      <Link to={vehicle.id} state={{ search: searchParams.toString() }}>
        <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full h-auto object-cover" />
        <div className="text-center p-2">
          <h3 className="mt-2 text-lg font-semibold">{vehicle.name}</h3>
          <p className="text-sm font-bold">${vehicle.price}<span className="font-normal">/day</span></p>
          <i className={`inline-block mt-1 px-4 py-2 rounded text-sm font-medium ${
            vehicle.type === 'simple' ? 'bg-gray-400 text-white' :
            vehicle.type === 'rugged' ? 'bg-blue-700 text-white' :
            vehicle.type === 'luxury' ? 'bg-yellow-500 text-white' : 
            vehicle.type === 'sports' ? 'bg-red-600 text-white' : ''
        
          }`}>{vehicle.type}</i>
        </div>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (loading) {
    return <h1 className='text-4xl font-bold m-60 text-gray-400'>Loading...</h1>;
  }
  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <>
      <div className="m-4 relative top-4 p-4 rounded-lg">
        <h1 className="font-bold text-lg mb-2">Explore our van options</h1>
        <div className="flex flex-wrap space-x-2">
          <button
            onClick={() => setSearchParams({ type: 'simple' })}
            className={`py-2 px-4 rounded-md shadow-sm transition ${
              typeFilter === 'simple' ? 'bg-gray-400 text-white' : 'bg-[#ffedcc] text-black hover:bg-gray-400 hover:text-white'
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => setSearchParams({ type: 'luxury' })}
            className={`py-2 px-4 rounded-md shadow-sm transition ${
              typeFilter === 'luxury' ? 'bg-yellow-400 text-white' : 'bg-[#ffedcc] text-black hover:bg-yellow-400 hover:text-white'
            }`}
          >
            Luxury
          </button>
          <button
            onClick={() => setSearchParams({ type: 'rugged' })}
            className={`py-2 px-4 rounded-md shadow-sm transition ${
              typeFilter === 'rugged' ? 'bg-blue-600 text-white' : 'bg-[#ffedcc] text-black hover:bg-blue-600 hover:text-white'
            }`}
          >
            Rugged
          </button>
          <button
            onClick={() => setSearchParams({ type: 'sports' })}
            className={`py-2 px-4 rounded-md shadow-sm transition ${
              typeFilter === 'sports' ? 'bg-red-600 text-white' : 'bg-[#ffedcc] text-black hover:bg-red-600 hover:text-white'
            }`}
          >
            Sports
          </button>
          {typeFilter && (
            <button
              onClick={() => setSearchParams({})}
              className="text-gray-600 py-2 px-4 underline hover:text-black transition"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-6 sm:py-2">
        {vehicleElements}
      </div>
    </>
  );
}

export default Vans;
