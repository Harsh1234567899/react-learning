import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  let [count, setCount] = useState(0)

  function increase (){
    if (count >=20) {
      console.log("count value is not be greater than 20");
      return
    }
    count += 1
    setCount(count)
    // setCount(count + 1)
  }
  function decrease (){
    if (count === 0) {
      console.log("count value is not be negative");
      return
    }
    count -= 1
    setCount(count)
    // setCount(count -1)
  }
  return (
    <>
      <h1>chai order {count}</h1>
      <button onClick={increase}>increase {count}</button>
      <button onClick={decrease}>decrease {count}</button>
    </>
  ) 
}

export default App
