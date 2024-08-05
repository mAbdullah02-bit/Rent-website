import React from "react";
import { BsStarFill } from "react-icons/bs";

export default function HostReview() {
    const reviewsData = [
        {
            rating: 5,
            name: "Ali",
            date: "October 9, 2020",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Bilal",
            date: "September 1, 2023",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ];
    
    return (
        <section className="host-reviews">
            <div className="top-text">
                <h2>Your reviews</h2>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <img
                className="graph"
                src="/images/host-review.png"
                alt="Review graph"
            />
            <h3 className="font-bold underline py-2">Reviews (2)</h3>
            {reviewsData.map((review) => (
                <div key={review.id}>
                    <div className="review bg-[#ffddb2] p-4 rounded-md mb-4">
                        <div className="flex items-center mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                                <BsStarFill className="review-star text-yellow-500 mr-1" key={i} />
                            ))}
                        </div>
                        <div className="info mb-2">
                            <p className="name font-bold">{review.name}</p>
                            <p className="date text-sm text-gray-500">{review.date}</p>
                        </div>
                        <p>{review.text}</p>
                    </div>
                    <hr />
                </div>
            ))}
        </section>
    );
}
