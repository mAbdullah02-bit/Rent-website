import { useState } from 'react'
import { BrowserRouter , Routes , Route ,Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import Vehicledetails from './pages/Vehicledetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <BrowserRouter> 
      <header className='relative h-[80px] bg-[#ffd9ab] flex justify-between w-full'>
<Link to='/' className='relative top-7 left-5 font-extrabold text-xl'>CARS DOME </Link>
<nav className='space-x-8 font-medium absolute  right-12 top-7 text-smd '>

<Link className=' '  to="/about">ABOUT</Link>
<Link  to="/vehicles">VEHICLES</Link>
</nav>
      </header>

    <Routes>
   <Route path='/' element={<Home/>}  />
   <Route path='/about' element={<About/>}  />
   <Route path='/vehicles' element={<Vans/>}  />
   <Route path='/vehicles/:id' element={<Vehicledetails/>}  />

    </Routes>
    </BrowserRouter>

    </>
  )
}


export default App

