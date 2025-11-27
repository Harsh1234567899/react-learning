import { useState } from 'react'

function App() {
  const [colour , setColour] = useState("black")
  function setcolor2 (e){
    setColour( e)
  }
  return (
    <>
      <div className='bg-white w-full h-screen duration-200 text-white' style={{backgroundColor : colour}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white rounded-full px-3 py-2'>
            <button className='outline-none p-2 rounded-full shadow-sm' style={{backgroundColor: "black"}} onClick={()=> setColour("white")}>white</button>
            <button className='outline-none p-2 rounded-full shadow-sm' style={{backgroundColor: "green"}} onClick={()=>setcolor2("green")}>green</button>
            <button className='outline-none p-2 rounded-full shadow-sm' style={{backgroundColor: "purple"}} onClick={() => setcolor2("purple")}>purple</button>
            <button className='outline-none p-2 rounded-full shadow-sm' style={{backgroundColor: "blue"}} onClick={() => setcolor2("blue")}>blue</button>
            <button className='outline-none p-2 rounded-full shadow-sm text-black' style={{backgroundColor: "yellow"}} onClick={() => setcolor2("yellow")}>yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
