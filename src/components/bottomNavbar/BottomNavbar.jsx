import React from 'react';
import './BottomNavbar.css';

export default function BottomNavbar({adding,addingHandler}) {
  
  const addNewTask = e => addingHandler(true)
  
  return (
    <>
      <div className="bottomNavbar__left"></div>
      <div className="bottomNavbar__center">
        <div className="addTask" onClick={addNewTask}>
          <i className="fas fa-plus"></i>
        </div>
      </div>
      <div className="bottomNavbar__right"></div>
    </>
  )
}
