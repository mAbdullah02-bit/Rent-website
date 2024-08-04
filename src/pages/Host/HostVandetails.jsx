import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams,NavLink } from 'react-router-dom';
import { createContext } from 'react';


function HostVandetails() {
  const [data, setData] = useState(null);
  const param = useParams();
  const datacontext=createContext(data)
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
  useEffect(() => {
    fetch(`/api/vans/${param.id}`)
      .then(res => res.json())
      .then(vdata => setData(vdata));
  }, [param.id]);

  return (
    <>
      <Link
        to=".."
        relative='path'
        className="back-button hover:underline"
      >&larr; <span>Back to all vans</span></Link>
      {data ? (
        <div className="container mx-auto p-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={data.vans.imageUrl} alt={data.vans.name} className="w-full object-cover h-64" />
            <div className="p-4">
              <span className={`inline-block px-4 py-2 rounded text-sm font-medium ${
                data.vans.type === 'simple' ? 'bg-gray-400 text-white' :
                data.vans.type === 'rugged' ? 'bg-blue-700 text-white' :
                data.vans.type === 'luxury' ? 'bg-yellow-500 text-white' : ''
              }`}>
                {data.vans.type}
              </span>
              <h3 className="mt-2 font-bold text-3xl">{data.vans.name}</h3>
           
              <nav className="host-van-detail-nav  gap-3">
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

            <Outlet  context={data.vans}/>
            
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-gray-400">Loading...</h1>
      )}
    </>
  );
}

export default HostVandetails;
