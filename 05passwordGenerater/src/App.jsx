import { useEffect } from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'


function App() {
  const [lengthe, setLengthe] = useState(6)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password,setPasswrod] = useState("")



  const passwordGenarater = useCallback(()=> { // memorays the function 
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) { // include number if checkbox is select
      str += "1234567890"
    }
    if (character) { // include special character if checkbox is select
      str += "!@#$%^&*()_+?><:{}[];',./"
    }

    for (let i = 0; i <= lengthe; i++) {
      let char = Math.floor(Math.random() * str.length +1)   
      pass += str.charAt(char)   
    }
    setPasswrod(pass)
  } , [lengthe,number,character,setPasswrod]) // store in chache

  useEffect( // run whenever triger
    ()=> {passwordGenarater()} // run the method when ever any change in dependacy array methods
  ,[lengthe,number,character,passwordGenarater]) // dependancy array is use to when anything change in property useEffect is run again

  const refHook = useRef(null)
   const copyPassword = useCallback(()=> {
    refHook.current?.select() // use to show textt is selected and copy 
    // refHook.current.setSelectionRange(0,3) // secelct only three value 
    window.navigator.clipboard.writeText(password) //copy the text
   },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md  rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-800'>
        <h1 className='text-white text-center my-3'>passwrod generater</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' ref={refHook} value={password} className='bg-white outline-none w-full py-1 px-3 ' placeholder='password'readOnly/>
          <button onClick={copyPassword} className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 active:bg-blue-400 '>copy</button>
        </div>

        <dvi className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input className='cursor-pointer' type='range' min={6} max={20}  value={lengthe} onChange={(e)=> {setLengthe(e.target.value)}}/>
            <label >length : {lengthe}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={number} onChange={()=>{setNumber((prev)=> !prev)}}/>
            <label htmlFor="numberInput">number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox'defaultChecked={character} onChange={()=>{setCharacter((prev)=> !prev)}}/>
            <label htmlFor="characterInput">character</label>
          </div>
        </dvi>
      </div>
    </>
  )
}

export default App
