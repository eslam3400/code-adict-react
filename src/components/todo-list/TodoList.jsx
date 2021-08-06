import React , { useState } from 'react';
import AddTodo from '../add-todo/AddTodo.jsx';
import Todo from '../todo/Todo.jsx';
import './TodoList.css';

export default function TodoList() {
  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  return (
    <>
      <div className="tasksList">
        <h1 className="tasksListHeader">ToDo List</h1>
        {
          todos.map(todo=>(
            <Todo key={todo.id} stateControll={setTodos} prevTodos={todos} todo={todo}/>
          ))
        }
        <AddTodo add={setTodos} prevTodos={todos}></AddTodo>
      </div>
    </>
  )
}