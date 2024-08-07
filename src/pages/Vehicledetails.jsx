import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { getVan } from '../api';

function Vehicledetails() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadVan() {
      setLoading(true);
      setError(null);
      try {
        const vehicleData = await getVan(id);
        setData(vehicleData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVan();
  }, [id]);

  const search = location.state?.search || "";

  if (loading) {
    return <h1 className='text-4xl font-bold m-60 text-gray-400'>Loading...</h1>;
  }
  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="block text-gray-500 hover:underline mb-4 ml-4"
      >&larr; <span>Back to all vans</span></button>
      {data ? (
        <div className="max-w-md mx-auto md:max-w-4xl md:flex bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <img className="w-full h-48 md:h-auto md:w-1/2 object-cover" src={data.imageUrl} alt={data.name} />
          <div className="p-8 md:w-1/2">
            <div className="uppercase tracking-wide text-sm text-gray-400 font-semibold">{data.type}</div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{data.name}</h1>
            <p className="mt-2 text-gray-500">${data.price}/day</p>
            <p className="mt-4 text-gray-500">{data.description}</p>
            <button className="bg-orange-500 text-white mt-4 px-6 py-3 w-full md:w-auto rounded-md text-lg font-bold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-600">
              Rent this van
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-gray-400">No data found</h1>
      )}
    </>
  );
}

export default Vehicledetails;
