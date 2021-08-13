import React from 'react';
import './App.css';
import BottomNavbar from './components/bottomNavbar/BottomNavbar';
import Header from './components/header/Header';
import TodoList from './components/todo-list/TodoList';
export default function App() {
  return (
    <main>
      <Header />
      <TodoList />
      <BottomNavbar />
    </main>
  )
}
