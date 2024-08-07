import React from 'react'
import { useOutletContext } from 'react-router-dom'



function Hostpricing() {
  const data=useOutletContext()

  return (
    <div>
<h1 className='font-bold m-3'>${data.price}<span className='font-semibold'>/day</span></h1>
<h1 className='font-bold m-3'>${data.price*7-(data.price*0.20)}<span className='font-semibold'>/week  -- <span className='font-thin'>(After 20% Discount  )</span> </span></h1>
<h1 className='font-bold m-3'>${data.price*30-(data.price*0.20)}<span className='font-semibold'>/month  -- <span className='font-thin'>(After 40% Discount )</span> </span></h1>

    </div>
  )
}

export default Hostpricing