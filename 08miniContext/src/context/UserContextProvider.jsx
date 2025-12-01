import React from 'react'
import userContext from './UserContext'
import { useState } from 'react'

export const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(null)
  return (
    <userContext.Provider value={{user,setUser}}>  
    {/* // this value-'props' is anybudy can access in this component */}
    {children}
    </userContext.Provider>
  )
}
