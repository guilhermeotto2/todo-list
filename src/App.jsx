import { useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Task 1",
      category: "Trabalho",
      complete: false
    },

    {
      id: 2,
      text: "Task 2",
      category: "Trabalho",
      complete: false
    },

    {
      id: 2,
      text: "Task 2",
      category: "Trabalho",
      complete: false
    }
  ])

  return (
    <div>
      dsa
    </div>
  )
}

export default App
