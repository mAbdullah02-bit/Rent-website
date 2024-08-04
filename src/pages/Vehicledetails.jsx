import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Vehicledetails() {
  const [data, setData] = useState(null);
  const param = useParams();
  
  useEffect(() => {
    fetch(`/api/vans/${param.id}`)
      .then(res => res.json())
      .then(vdata => setData(vdata));
  }, [param.id]);
   const search = location.state?.search || ""
  return (
    <>
      <Link
        to=".."
        relative='path'
        className="block text-gray-500 hover:underline mb-4 ml-4"
      >&larr; <span>Back to all vans</span></Link>
      {data ? (
        <div className="max-w-md mx-auto md:max-w-4xl md:flex bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <img className="w-full h-48 md:h-auto md:w-1/2 object-cover" src={data.vans.imageUrl} alt={data.vans.name} />
          <div className="p-8 md:w-1/2">
            <div className="uppercase tracking-wide text-sm text-gray-400 font-semibold">{data.vans.type}</div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{data.vans.name}</h1>
            <p className="mt-2 text-gray-500">${data.vans.price}/day</p>
            <p className="mt-4 text-gray-500">{data.vans.description}</p>
            <button className="bg-orange-500 text-white mt-4 px-6 py-3 w-full md:w-auto rounded-md text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-600">
              Rent this van
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-gray-400">Loading...</h1>
      )}
    
    </>
  );
}

export default Vehicledetails;
