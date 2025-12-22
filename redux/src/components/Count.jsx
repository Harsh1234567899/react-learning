import  { useDispatch ,useSelector } from 'react-redux'
import { withdrawemoney ,depositemoney } from '../store/actionCreator'

function Count() {
  const amounte  = useSelector(state => state.amount)
  const dispatch = useDispatch()

  return (
    <>
        <div className='flex mt-10'>
            <button onClick={()=> dispatch(depositemoney(1))} className='bg-blue-600 p-2 m-1 active:bg-blue-400'>+</button>
            <p className='text-black'> this is amount : {amounte}</p>
            <button onClick={() => dispatch(withdrawemoney(1))} className='bg-blue-600 p-2 m-1 active:bg-blue-400'>-</button>
        </div>
       
    </>
  )
}

export default Count