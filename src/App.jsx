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
    <div className="app rounded p-5 mt-5 mb-5">
      <h1 className='text-center'>Lista de tarefas:</h1>

      <div className="todo-list">

        {todos.map((todo) => (
          <div className="todo">
            <div className="content">
              <p>{todo.text}</p>
              <p className="category">({todo.category})</p>
            </div>
            
            <div>
              <button>Completar</button>
              <button>x</button>
            </div>
          
          </div>
        ))}

      </div>

    </div>
  )
}

export default App
