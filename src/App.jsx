import { useState } from 'react';
import './App.css';
import Todo from './components/todo.jsx';
import TodoForm from './components/todoForm.jsx';
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
          <Todo todo={todo} />
        ))}

      </div>
      <TodoForm />
    </div>
  )
}

export default App
