import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit  = (e) => {
        e.preventDefault()
        if(!value || !category) return;
        addTodo(value, category);
        setValue("");
        setCategory("");
    }

    return (
    <div className='todoForm mt-4'>
        <h2 className='mb-4 criar'>Criar tarefa:</h2>
        <form className='mb-3 ' onSubmit={handleSubmit}>
            <input 
            className='w-100 rounded p-2 border-0 outline-0'
            type="text"
            placeholder='Digite o Titulo' 
            value={value}
            onChange={(e) => setValue(e.target.value)}/>

            <select className='form-select mb-3 mt-3' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type='submit' className='btn btn-primary'>Criar tarefa</button>
        </form>
    </div>
    )
}

export default TodoForm