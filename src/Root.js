import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        hi i am ROOT component
        <Outlet/>

    </div>
  )
}

export default Root