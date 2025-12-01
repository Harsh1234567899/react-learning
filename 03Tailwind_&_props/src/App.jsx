
// import './index.css'

import Card from "./assets/components/Card"
const myObj = {
  name : "harsh",
  age: "21"
}
const myarr = [1,2,3]
const username = "harsh"
function App() {

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-2xl w-3xl">tailwind test</h1>
      <Card name={username}/>
    </>
  )
}

export default App
