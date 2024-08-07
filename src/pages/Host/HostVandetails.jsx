import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { getVan } from '../../api';

function HostVandetails() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  };

  useEffect(() => {
    async function loadVan() {
      setLoading(true);
      setError(null);
      try {
        console.log(`Loading van with id: ${id}`);
        const vehicleData = await getVan(id);
        console.log("Vehicle data: ", vehicleData); // Log the fetched data
        setData(vehicleData);
      } catch (err) {
        setError(err);
        console.error("Error loading van: ", err); // Log the error
      } finally {
        setLoading(false);
      }
    }

    loadVan();
  }, [id]);

  const search = location.state?.search || "";

  if (loading) {
    return <h1 className='text-4xl font-bold m-40'>Loading...</h1>;
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
        <div className="container mx-auto p-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={data.imageUrl} alt={data.name} className="w-full object-cover h-64" />
            <div className="p-4">
              <span className={`inline-block px-4 py-2 rounded text-sm font-medium ${
                data.type === 'simple' ? 'bg-gray-400 text-white' :
                data.type === 'rugged' ? 'bg-blue-700 text-white' :
                data.type === 'luxury' ? 'bg-yellow-500 text-white' : ''
              }`}>
                {data.type}
              </span>
              <h3 className="mt-2 font-bold text-3xl">{data.name}</h3>
              <nav className="host-van-detail-nav gap-3">
                <NavLink
                  to="."
                  end
                  style={({ isActive }) => isActive ? activeStyles : null}
                >
                  Details
                </NavLink>
                <NavLink
                  to="pricing"
                  style={({ isActive }) => isActive ? activeStyles : null}
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="photos"
                  style={({ isActive }) => isActive ? activeStyles : null}
                >
                  Photos
                </NavLink>
              </nav>
              <Outlet context={data} />
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-gray-400">No data found</h1>
      )}
    </>
  );
}

export default HostVandetails;
