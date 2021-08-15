import React, { useState, useEffect } from 'react';
import './App.css';
import AddTodo from './components/add-todo/AddTodo';
import BottomNavbar from './components/bottomNavbar/BottomNavbar';
import FadedBackground from './components/fadedBackground/FadedBackground';
import Header from './components/header/Header';
import TodoList from './components/todo-list/TodoList';

export default function App() {
  // Hooks
  const [showNewTaskInput, setShowNewTaskInput] = useState(false)
  const [showBottomNavbar, setShowBottomNavbar] = useState(true)
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
  const [user, setUser] = useState(localStorage.getItem("user"))
  useEffect(() => {
    if (!user) {
      let username = prompt("Please Enter Your Name");
      localStorage.setItem("user", username);
      setUser(username);
    }
  }, []);
  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)), [tasks]) //save data to localStorage When Updated
  // Methods
  const addTask = task => setTasks([...tasks, task]);
  const hideAddTaskHandler = () => {
    setShowNewTaskInput(false)
    setShowBottomNavbar(true);
  }
  const hideBottomNavbarHandler = () => {
    setShowNewTaskInput(true);
    setShowBottomNavbar(false)
  }
  const toggleTaskCompletion = id => setTasks(tasks.map(task => {
    if (task.id == id) task.done = !task.done;
    return task;
  }))

  return (
    <main>
      <div className="appContainer">
        <div className="appBody" onClick={hideAddTaskHandler}>
          {showNewTaskInput ? <FadedBackground /> : null}
          <Header />
          <TodoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
        </div>
        <div className="BottomNavbar" style={{ backgroundColor: showNewTaskInput ? 'white' : 'black' }}>
          {showNewTaskInput ? <AddTodo add={addTask} hide={hideAddTaskHandler} /> : <BottomNavbar hide={hideBottomNavbarHandler} />}
        </div>
      </div>
    </main>
  )
}
