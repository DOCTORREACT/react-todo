import React, { useContext } from 'react'
import { useState } from 'react'
import './TodoItem.css'
import Context from '../../context'



function TodoItem({ todo, index, onChange, saveChanges}) {
    
    const { removeTodo } = useContext(Context)
    const [input, setInput] = useState(todo.title)

    const [textChangeIsVisibile, setTextChangeIsVisibile] = useState(false)
    const [titleIsVisibile, setTitleIsVisibile] = useState(true)

    const classes = []
    if (todo.completed) {
        classes.push('done')
    }

    const titleHandler = title => {
        setInput(title.target.value)
    }

    const changeVisibility = () => {
        setTextChangeIsVisibile(!textChangeIsVisibile)
        setTitleIsVisibile(!titleIsVisibile)
    }

    const saveInfo = () => {
        setTextChangeIsVisibile(!textChangeIsVisibile)
        setTitleIsVisibile(!titleIsVisibile)
        todo.title = input
        
    }

 
    return (
        <li className='todo_item'>
        <div className='todo_index'>
            {index + 1} 
        </div>
        <div className='todo_checkbox'>    
            <input 
                type='checkbox' 
                checked={todo.completed}
                onChange={() => onChange(todo.id)}
            />
            </div>
        <div className={classes.join(' ')} 
                style={{display: titleIsVisibile ? 'block' : 'none' }}>
                <div className='todo_text'> {todo.title} </div>
        </div>
            
           <div>
            <input type='text' 
                className='title_change' 
                value={input} 
                onChange={titleHandler}
                style={{display: textChangeIsVisibile ? 'block' : 'none' }}
                  />
            </div>
        
            <div className='buttons'>
                <button className='save-btn' onClick={() => saveChanges(todo.id, input), saveInfo} > save</button>
                <button className='edit_btn' onClick={changeVisibility}> edit</button>
                <button className='delete_btn' onClick={() => removeTodo(todo.id)}> delete </button>
            </div>
        
        </li>
    )
}

export default TodoItem