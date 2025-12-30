import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authslice'

function Logout() {
    const dispatch = useDispatch()
    const logoutHandelr = () => {
        authService.logOut().then(()=> {dispatch(logout())})
    }
    
  return (
    <>
    <button onClick={logoutHandelr} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
    </>
  )
}

export default Logout