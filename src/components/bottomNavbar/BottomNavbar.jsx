import React from 'react';
import './BottomNavbar.css';

export default function BottomNavbar() {
  return (
    <>
      <section className="bottomNavbar">
        <div className="bottomNavbat__left">L</div>
        <div className="bottomNavbat__center">
          <div className="addTask__container">
            <div className="addTask">
              <i class="fas fa-plus"></i>
            </div>
          </div>
        </div>
        <div className="bottomNavbat__right">R</div>
      </section>
    </>
  )
}
