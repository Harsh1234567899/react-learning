import React from 'react'
import { useParams } from 'react-router'

function User() {
  const {id} = useParams() // take value from URL 
  return (
    <div className='text-center bg-black text-white p-4'>User : {id}</div>
  )
}

export default User