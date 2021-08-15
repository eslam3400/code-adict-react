import React from 'react';
import './BottomNavbar.css';

export default function BottomNavbar({hide}) {  
  return (
    <>
      <div className="bottomNavbar__left"></div>
      <div className="bottomNavbar__center">
        <div className="addTask" onClick={hide}>
          <i className="fas fa-plus"></i>
        </div>
      </div>
      <div className="bottomNavbar__right"></div>
    </>
  )
}
