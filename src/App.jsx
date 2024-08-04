import { useState } from 'react'
import { BrowserRouter , Routes , Route ,Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import Vehicledetails from './pages/Vehicledetails'
import Layout from './components/Layout'
import Host from './pages/Host/Host'
import Hostincome from './pages/Host/Hostincome'
import HostReview from './pages/Host/HostReview'
import HostLayoute from './pages/Host/HostLayoute'
import HostVans from './pages/Host/HostVans'
import HostVandetails from './pages/Host/HostVandetails'
import Hostpricing from './pages/Host/Hostpricing'
import Hostphotos from './pages/Host/Hostphotos'
import Hostdetails from './pages/Host/Hostdetails'
import NotFound from './pages/Notfound'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      




      <BrowserRouter> 
     <Routes>
   <Route  path='/' element={<Layout/>}>
   <Route index element={<Home/>}  />
   <Route path='about' element={<About/>}  />
   <Route path='vehicles' element={<Vans/>}  />
   <Route path='vehicles/:id' element={<Vehicledetails/>}  />
   
   <Route path='/host' element={<HostLayoute/>}  >

   <Route index element={<Host/>}  />
   <Route path='income' element={<Hostincome/>}  />
   <Route path='review' element={<HostReview/>}  />
   <Route path='vans' element={<HostVans/>}  />
   
   <Route path='vans/:id' element={<HostVandetails/>}  >
   <Route index element={<Hostdetails/>} />
   <Route path='pricing' element={<Hostpricing/>} />
   <Route path='photos' element={<Hostphotos/>} />
   </Route>
   </Route>
   <Route path="*" element={<NotFound />}/>
     </Route>

     </Routes>
      </BrowserRouter>

    </>
  )
}


export default App

