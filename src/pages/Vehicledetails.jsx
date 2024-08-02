import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Vehicledetails() {
  const [data, setData] = useState(null);
  const param = useParams();

  useEffect(() => {
    fetch(`/api/vans/${param.id}`)
      .then(res => res.json())
      .then(vdata => setData(vdata));
  }, [param.id]);

  return (
    <>
      {data ? (
        <div key={data.vans.id} className=" relative   h-screen border justify-center border-black rounded-lg overflow-hidden">
          <img src={data.vans.imageUrl} alt={data.vans.name} className="absolute top-5 obejct-cover h-[500px] object-cover rounded-xl left-8" />
            <span className={`inline-block px-4 py-2 rounded absolute right-[500px] top-10 text-sm font-medium ${
                data.vans.type === 'simple' ? 'bg-gray-400 text-white' :
              data.vans.type === 'rugged' ? 'bg-blue-700 text-white' :
              data.vans.type === 'luxury' ? 'bg-yellow-500 text-white' : ''
            }`}>
              {data.vans.type}
            </span>
          <div className="text-center p-4  w-[500px]">
            <h3 className="mt-2  font-bold absolute right-[150px] top-10 text-3xl">{data.vans.name}</h3>
            
            <p className="text-sm w-[400px] absolute right-5 m-4 top-20 justify-center">{data.vans.description}</p>
            <button className="bg-[#ffad6e] tracking-widest text-white  absolute right-10 top-60 rounded-md text-xl font-bold px-[80px] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#ff7f3f] hover:shadow-lg text-nowrap p-2 m-2">Rent Now For ${data.vans.price}</button>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-gray-400">Loading...</h1>
      )}
    </>
  );
}

export default Vehicledetails;
