import React from 'react'
import { Outlet } from 'react-router-dom'
function Host() {
  return (
    <>
    <div>Host</div>
    <Outlet/>
    </>
  )
}

export default Host