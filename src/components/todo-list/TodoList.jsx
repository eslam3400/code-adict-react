import React , { useState } from 'react';
import AddTodo from '../add-todo/AddTodo.jsx';
import Header from '../header/Header.jsx';
import Todo from '../todo/Todo.jsx';
import './TodoList.css';

export default function TodoList() {
  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  return (
    <>
      <div className="tasksList">
        {todos.map(todo=> <Todo key={todo.id} stateControll={setTodos} prevTodos={todos} todo={todo}/>)}
        <AddTodo add={setTodos} prevTodos={todos}></AddTodo>
      </div>
    </>
  )
}