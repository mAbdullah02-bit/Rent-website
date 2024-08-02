import React from 'react';

function About() {
  return (
    <div>
      {/* Background Image Section */}
      <div className="relative">
        <img 
          src="/images/car.png" 
          alt="Car Image" 
          className="h-80 w-full object-cover " 
        />
      </div>

      {/* About Section */}
      <div className="bg-[#fbd6ab] py-12 px-4 text-center">
        <h1 className="text-3xl font-extrabold mb-4">About Us</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Welcome to Cars Dome, where your journey begins with comfort and style. We are a premier car rental service dedicated to providing you with a wide range of high-quality vehicles to suit your travel needs. Whether you're planning a weekend getaway, a business trip, or a long-term adventure, we have the perfect car for you.
        </p>

        {/* Call to Action Button */}
        <div className="mt-8">
          <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-white hover:text-black  transition duration-300">
            Book Now
          </button>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Our mission is to offer a seamless and enjoyable car rental experience for all our customers. We believe in delivering exceptional service, transparency, and value. We strive to make your travel experience as smooth as possible, providing you with reliable vehicles and excellent customer support.
        </p>

        {/* Highlight Box */}
        <div className="bg-white border border-gray-200 p-4 mt-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-2">Why Choose Us?</h3>
          <ul className="list-disc list-inside text-lg">
            <li><span className='font-medium'>Wide Selection of Vehicles:</span> From compact cars and sedans to SUVs and luxury vehicles, we have an extensive fleet to meet your specific requirements.</li>
            <li><span className='font-medium'>Competitive Pricing:</span> We offer competitive rates without compromising on quality, ensuring you get the best value for your money.</li>
            <li><span className='font-medium'>Easy Booking Process:</span> Our user-friendly website and booking system make it simple to reserve the car you need in just a few clicks.</li>
            <li><span className='font-medium'>Customer Satisfaction:</span> Your satisfaction is our priority. Our dedicated customer support team is always here to assist you, ensuring a hassle-free rental experience.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-extrabold mt-8 mb-4">Our Commitment</h2>
        <p className="text-lg max-w-3xl mx-auto">
          At [Cars Dome], we are committed to safety and quality. All our vehicles undergo regular maintenance and thorough inspections to ensure they meet the highest standards of safety and performance. We are continuously working to improve our services and expand our fleet, keeping up with the latest trends and customer demands.
        </p>

        {/* Highlight Box */}
        <div className="bg-white border border-gray-200 p-4 mt-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-2">Join Our Community</h3>
          <p className="text-lg">
            Join our growing community of satisfied customers who trust Cars Dome for their car rental needs. Follow us on social media to stay updated on our latest offers, promotions, and travel tips.
          </p>
        </div>

        <p className="text-lg mt-8">
          Thank you for choosing Cars Dome. We look forward to serving you and being a part of your journey!
        </p>

       
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300">
            Contact Us
          </button>
          <button className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-black transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
