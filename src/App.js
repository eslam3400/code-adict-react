import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/add-todo/AddTodo';
import BottomNavbar from './components/bottomNavbar/BottomNavbar';
import FadedBackground from './components/fadedBackground/FadedBackground';
import Header from './components/header/Header';
import TodoList from './components/todo-list/TodoList';

export default function App() {
  const [showAddingNewTaskInput, setShowAddingNewTaskInput] = useState(false)
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])

  return (
    <main>
      <div className="appBody" onClick={e => setShowAddingNewTaskInput(false)}>
        {showAddingNewTaskInput ? <FadedBackground /> : null}
        <Header />
        <TodoList tasks={tasks} setTasks={setTasks} />
      </div>
      <div className="BottomNavbar" style={{ backgroundColor: showAddingNewTaskInput ? "white" : 'black' }}>
        {showAddingNewTaskInput ? <AddTodo setTasks={setTasks} showInputHandler={setShowAddingNewTaskInput} /> : <BottomNavbar adding={showAddingNewTaskInput} addingHandler={setShowAddingNewTaskInput} />}
      </div>
    </main>
  )
}
