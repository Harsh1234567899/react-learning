import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data,setData] = useState([])
    const [data2,setData2] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary/followers')
        .then((response)=> response.json())
        .then((data)=> setData(data))
    },[])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((response)=> response.json())
        .then((data2)=> setData2(data2))
    },[])
    const followers = data.length
    
  return (
    <>
    <div className='bg-gray-400 text-center text-white '>Github Follower : {followers}</div>
    <img src={data2.avatar_url} alt='git logo'/>   
     </>

  )
}

export default Github