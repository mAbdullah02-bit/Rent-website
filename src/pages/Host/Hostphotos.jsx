import React from 'react'
import { useOutletContext } from 'react-router-dom'

function Hostphotos() {

const data=useOutletContext()

  return (
    <div>

<img src={data.imageUrl} alt="" />

    </div>
  )
}

export default Hostphotos