import React from 'react';
import './Header.css'

export default function Header() {

  const getUsernameFirstLetter = ()=> localStorage.getItem("user")? localStorage.getItem("user")[0].toLocaleUpperCase():""

  return (
    <section className="header">
      <div className="header__left">
        <h2>My Tasks</h2>
      </div>
      <div className="header__right">
        {getUsernameFirstLetter()}
      </div>
    </section>
  )
}
