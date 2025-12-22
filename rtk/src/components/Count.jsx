import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increase ,decrease} from '../store/amountSlice.js'

function Count() {
  const amount = useSelector((state)=> state.amount)
  const dispatch = useDispatch()
  return (
    <>
        <div className='flex mt-10'>
            <button onClick={()=> dispatch(increase())} className='bg-blue-600 p-2 m-1 active:bg-blue-400'>+</button>
            <p className='text-black'>this is amount {amount}</p>
            <button onClick={()=> dispatch(decrease())} className='bg-blue-600 p-2 m-1 active:bg-blue-400'>-</button>
        </div>
    </>
  )
}

export default Count