import { useState , useEffect } from 'react'
import './App.css'
import config from './config/config';
import authService from './appwrite/auth';
import {useDispatch, useSelector} from 'react-redux'
import { login, logout } from './store/authslice';
import { Footer, Header } from './components';
import {Outlet} from 'react-router-dom'

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  // console.log(config.appwriteBucketId);
  const [loading ,setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    // authService.getCurrentUser().then((userData)=> {
    //   if (userData) {
    //     dispatch(login({userData}))        
    //   }
    //   else{
    //     dispatch(logout())
    //   }
    // }).finally(()=> setLoading(false))
    const initAuth = async () => {
    try {
      const userData = await authService.getCurrentUser()
      if (userData) {
        dispatch(login({ userData }))
      } else {
        dispatch(logout())
      }
    } catch (err) {
      console.error('Unexpected auth error', err)
      dispatch(logout())
    } finally {
      setLoading(false)
    }
  }

  initAuth()
  },[])
  return !loading ?  (
    <>
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header/>
          <main>
            <Outlet/>
          </main>
          <Footer/>
        </div>
      </div>
    </>
  ) : (null)
}

export default App
