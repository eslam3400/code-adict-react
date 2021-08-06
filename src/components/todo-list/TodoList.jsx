import React , { useState } from 'react';
import AddTodo from '../add-todo/AddTodo.jsx';
import Todo from '../todo/Todo.jsx';
import './TodoList.css';

export default function TodoList() {
  const [todos,setTodos] = useState(localStorage.getItem("todos") || [{content:"ASDsad",id:0}]);
  return (
    <>
      <div className="tasksList">
        <h1 className="tasksListHeader">ToDo List</h1>
        {
          todos.map(todo=>(
            <Todo key={todo.id} content={todo.content} id={todo.id}/>
          ))
        }
        <AddTodo add={setTodos} prevTodos={todos}></AddTodo>
      </div>
    </>
  )
}