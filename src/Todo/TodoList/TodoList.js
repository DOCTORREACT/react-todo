import React from 'react'
import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'



function TodoList(props) {
    return (
    
        <ul className="todo_list">
            { props.todos.map((todo, index) => {
                return (
                <TodoItem todo={todo}
                 key={todo.id} 
                 index={index} 
                 onChange={props.checkBoxClick}
                 saveChanges={props.sendInfo}
                 />
            )})}
        </ul>
                  
      
    )
}

export default TodoList