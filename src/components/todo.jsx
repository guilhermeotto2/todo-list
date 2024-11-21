import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div className="todo rounded mb-5 mt-5 d-flex" 
        style={{
            textDecoration: todo.complete ? "line-through" : "",
            backgroundColor: todo.complete ? "#0c2749" : "#0F3460",
        }}>
            <div className="content p-2 rounded flex-column text-wrap">
                <h5 className='text-wrap'>{todo.text}</h5>
                <p className="category"><strong>({todo.category})</strong></p>
            </div>
            
            <div className='d-flex justify-content-center align-items-center'>
                <button className='complete rounded' onClick={() => completeTodo(todo.id)}>
                    {todo.complete ? "Desmarcar" : "Completar"}
                </button>
                
                <button className='remove rounded' onClick={() => removeTodo(todo.id)}>x</button>
            </div>
            
        </div>
    )
}

export default Todo