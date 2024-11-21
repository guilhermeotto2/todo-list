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
      id: 3,
      text: "Task 3",
      category: "Trabalho",
      complete: false
    }
  ]);

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 100000),
      text,
      category,
      complete: false,
    },
  ]

  setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map(
      (todo) => todo.id === id ? (todo.complete =  !todo.complete) : todo);

      setTodos(newTodos)
  }

  return (
    <div className="app rounded p-5 mt-5 mb-5">
      <h1 className='text-center'>Lista de tarefas:</h1>
      <TodoForm addTodo = {addTodo} />
      <div className="todo-list">

        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo = {completeTodo} />
        ))}

      </div>

    </div>
  )
}

export default App
