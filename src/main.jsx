import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer, Model } from "miragejs";
import './index.css';

createServer({
    models: {
        van: Model,
        user: Model, 
    },

    seeds(server) {
        server.create("van", { id: "RUF050GByC2da0biuq42", name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple", hostId: "123" });
        server.create("van", { id: "Ur2CUg9UML4ZimxEsQQQ", name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged", hostId: "123" });
        server.create("van", { id: "sC0rKzQO32i46lxhRFXl", name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury", hostId: "456" });
        server.create("van", { id: "21qv6H9UDSD39OAsxXR4", name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple", hostId: "789" });
        server.create("van", { id: "YzPunFxCZK40QCLvLnZd", name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury", hostId: "789" });
        server.create("van", { id: "Bh3qItYKB33LU5anWSui", name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged", hostId: "123" });
        server.create("van", { 
            id: "A1b2C3d4E5f6G7h8I9J0", 
            name: "Speedster", 
            price: 150, 
            description: "The Speedster is a high-performance sports car designed for thrill-seekers. Equipped with a powerful engine and sleek aerodynamic design, this car is built for speed and agility.", 
            imageUrl: "https://assets.example.com/speedster.png", 
            type: "sports", 
            hostId: "101" 
          });
    
          // SUV
          server.create("van", { 
            id: "B2c3D4e5F6g7H8i9J0K1", 
            name: "Mountain Explorer", 
            price: 90, 
            description: "The Mountain Explorer is an SUV designed for off-road adventures. With its robust build and high ground clearance, it's perfect for navigating rugged terrain.", 
            imageUrl: "https://assets.example.com/mountain-explorer.png", 
            type: "SUV", 
            hostId: "102" 
          });
    
          // Sedan
          server.create("van", { 
            id: "C3d4E5f6G7h8I9J0K1L2", 
            name: "City Cruiser", 
            price: 70, 
            description: "The City Cruiser is a comfortable sedan ideal for city driving. It offers a smooth ride, modern features, and excellent fuel efficiency.", 
            imageUrl: "https://assets.example.com/city-cruiser.png", 
            type: "sedan", 
            hostId: "103" 
          });
    
          // Sports Car
          server.create("van", { 
            id: "D4e5F6g7H8i9J0K1L2M3", 
            name: "Road Warrior", 
            price: 160, 
            description: "The Road Warrior is a top-of-the-line sports car with exceptional handling and performance. It's built for those who love the thrill of driving.", 
            imageUrl: "https://assets.example.com/road-warrior.png", 
            type: "sports", 
            hostId: "104" 
          });
    
          // Pickup Truck
          server.create("van", { 
            id: "E5f6G7h8I9J0K1L2M3N4", 
            name: "Workhorse", 
            price: 80, 
            description: "The Workhorse is a durable pickup truck designed for heavy-duty tasks. It has a large cargo bed and powerful engine to handle tough jobs.", 
            imageUrl: "https://assets.example.com/workhorse.png", 
            type: "pickup", 
            hostId: "105" 
          });
    
          // Luxury Car
          server.create("van", { 
            id: "F6g7H8i9J0K1L2M3N4O5", 
            name: "Elite Cruiser", 
            price: 200, 
            description: "The Elite Cruiser is a luxury car that offers the ultimate in comfort and style. It features a premium interior and advanced technology.", 
            imageUrl: "https://assets.example.com/elite-cruiser.png", 
            type: "luxury", 
            hostId: "106" 
          });
    
          // Compact Car
          server.create("van", { 
            id: "G7h8I9J0K1L2M3N4O5P6", 
            name: "Eco Compact", 
            price: 50, 
            description: "The Eco Compact is a small, efficient car perfect for city dwellers. It offers great fuel economy and is easy to park in tight spaces.", 
            imageUrl: "https://assets.example.com/eco-compact.png", 
            type: "compact", 
            hostId: "107" 
          });
        server.create("user", { id: "4221", email: "b@b.com", password: "p123", name: "Abdullah" });
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        // this.timing = 2000  // => mock a 2 second delay in server response
this.passthrough("https://firestore.googleapis.com/**")
        this.get("/vans", (schema, request) => {
            // return new Response(400, {}, {error: "Error fetching data"})
            return schema.vans.all()
        })

        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })

        this.get("/host/vans", (schema, request) => {
         
            return schema.vans.where({ hostId: "123" })
        })

        this.get("/host/vans/:id", (schema, request) => {
           
            const id = request.params.id
            return schema.vans.findBy({ id, hostId: "123" })
        })
        
        this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody)
            
            const foundUser = schema.users.findBy({ email, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }

            
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your Ride."
            }
        })
    }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);