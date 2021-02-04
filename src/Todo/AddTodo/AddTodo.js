import React, {useState} from 'react'
import './AddTodo.css'


function AddTodo ({ onSubmit }) {
    const [input, setInput] = useState('')

    const handleChange = newTodoTitle => {   
        setInput(newTodoTitle.target.value)
    }
  
   const handleSubmit = newTodoTitle => { 
    newTodoTitle.preventDefault() 

    onSubmit({
        id: Math.random() * 100,
        completed: false,
        title: input
    })
    setInput('')
   }
        
    return (
        <form className='add_form' onSubmit={handleSubmit}>
        <input value={input} onChange={handleChange} className='add_todo_title'/>
        <button type='submit'>Add Todo </button>
        </form>
    )
}

export default AddTodo

