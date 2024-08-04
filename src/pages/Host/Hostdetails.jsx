import React from 'react'
import { useOutletContext } from 'react-router-dom'
function Hostdetails() {
  const currentVan=useOutletContext()
  return (
    <section className="host-van-detail-info m-2 ">
    <h4 className=' my-2'>Name: <span>{currentVan.name}</span></h4>
    <h4 className=' my-2'>Category: <span>{currentVan.type}</span></h4>
    <h4 className=' my-2'>Description: <span>{currentVan.description}</span></h4>
    <h4 className=' my-2'>Visibility: <span>Public</span></h4>
</section>
  )
}

export default Hostdetails