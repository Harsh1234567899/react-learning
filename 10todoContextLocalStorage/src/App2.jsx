import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/index.js'
import TodoForm from './components/TodoForm.jsx'
import TodoItem from './components/TodoItem.jsx'

function App2() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev,{id: Date.now(), ...todo}])
  }
  const updateTodo = (id,todo) => {
    setTodos((prev)=> prev.map((prevTodo) => (prevTodo.id === id ? todo: prevTodo)))
  }
  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo , completed : !prevTodo.completed}: prevTodo))
  }

  useEffect(()=>{ // this effect for get the data from localstorage
    const todos = JSON.parse(localStorage.getItem("todos2")) // change key name other wise it will overite the value
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])
  useEffect(()=>{ // this effect for set the data to localstorage
    localStorage.setItem("todos2",JSON.stringify(todos)) // change key name other wise it will overite the value
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8 border-5 mt-5">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">2 - Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo)=> (
              <div key={todo.id} className='w-full'><TodoItem todo={todo}/></div>
            ))}
          </div>
        </div>
      </div>
      </TodoProvider>
  )
}

export default App2
