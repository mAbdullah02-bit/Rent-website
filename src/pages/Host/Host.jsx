import React, {useState,useEffect} from "react"
import { Link } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"
import { getHostvehicles } from "../../api"

export default function Host() {
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
   useEffect(() => {
        setLoading(true)
        getHostvehicles()
            .then(data => setVans(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    function renderVanElements(vans) {
        const hostVansEls = vans.map((van) => (
            <div className="host-van-single relative" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
                <Link to={`vans/${van.id}`} className="absolute right-10 font-bold">View</Link>
            </div>
        ))

        return (
            <div className="host-vans-list">
                <section>{hostVansEls}</section>
            </div>
        )
    }



    if (error) {
        return <h1>Error: {error.message}</h1>
    }

    return (
        <>
            <section className="host-dashboard-earnings">
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income" className="mx-5 font-bold">Details</Link>
            </section>
            <section className="host-dashboard-reviews">
                <h2>Review score</h2>

                <BsStarFill className="star" />

                <p>
                    <span>5.0</span>/5
                </p>
                <Link to="review" className=" font-bold mx-5" >Details</Link>
            </section>
            <section className="host-dashboard-vans">
                <div className="top">
                    <h2>Your listed vans</h2>
                    <Link to="vans " className="font-bold m-5">View all</Link>
                </div>
                {
                    loading && !vans
                    ? <h1>Loading...</h1>
                    : (
                        <>
                            {renderVanElements(vans)}
                        </>
                    )
                }
              
            </section>
        </>
    )
}
