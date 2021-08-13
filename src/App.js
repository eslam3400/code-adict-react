import React, { useState } from 'react';
import './App.css';
import AddTodo from './components/add-todo/AddTodo';
import BottomNavbar from './components/bottomNavbar/BottomNavbar';
import FadedBackground from './components/fadedBackground/FadedBackground';
import Header from './components/header/Header';
import TodoList from './components/todo-list/TodoList';

export default function App() {
  const [addingNewTask, setAddingNewTask] = useState(false)

  return (
    <main>
      <div className="appBody" onClick={e => setAddingNewTask(false)}>
        {addingNewTask ? <FadedBackground /> : null}
        <Header />
        <TodoList />
      </div>
      <div className="BottomNavbar" style={{ backgroundColor: addingNewTask ? "white" : 'black' }}>
        {addingNewTask ? <AddTodo /> : <BottomNavbar adding={addingNewTask} addingHandler={setAddingNewTask} />}
      </div>
    </main>
  )
}
