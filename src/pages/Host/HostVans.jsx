import React,{useState,useEffect} from "react"
import { Link } from "react-router-dom"
import { getHostvehicles } from "../../api";

export default function HostVans() {
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function loadVans() {
            setLoading(true);
            setError(null);
            try {
              const data = await getHostvehicles();
              setVans(data);
            } catch (err) {
              setError(err);
            } finally {
              setLoading(false);
            }
          }
      
          loadVans();
    }, [])

    const hostVansEls = vans.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))
    if (loading) {
        return <h1 className='text-4xl font-bold m-60 text-gray-400'>Loading...</h1>;
      }
      if (error) {
        return <h1>There was an error: {error.message}</h1>;
      }
    return (
        <section>
            <h1 className="host-vans-title m-3 text-xl">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}