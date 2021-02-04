import React, {useState, useEffect } from 'react'
import TodoList from './Todo/TodoList/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo/AddTodo'




function App() {
const [todos, setTodos] = useState([])

 useEffect(() => {
    fetchData();
  }, []);
 const fetchData = async () => {
    let response = await (
      await fetch("https://jsonplaceholder.typicode.com/todos")
    ).json();
    setTodos(response);
  };
  



function todoCompleted(id) {
  setTodos(
    todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  }))
}

function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id))
}

function addTodo(todo) {
  setTodos(todos.concat([todo]))
}

function editTodo(todoId, title) {
    setTodos(todos.map(todo => {
        if (todo.id === todoId) {
          todo.title = title
        }
        return todo
    }))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
    <div className='wrapper'>
    <AddTodo onSubmit={ addTodo }/>
    {todos.length ? <TodoList 
                      todos={todos} 
                      checkBoxClick={todoCompleted}
                      sendInfo={editTodo}
                     /> : 
                     <h1> NO TODOS</h1>}
    
    </div>
    </Context.Provider>
  );
}

export default App
