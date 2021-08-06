import React from 'react';
import './Todo.css';

export default function Todo({content,id}) {
  return (
    <div className="task">
      <p>{content}</p>
      <ul>
        <li><i className="fas fa-clipboard-check"></i></li>
        <li><i className="fas fa-edit"></i></li>
        <li><i className="fas fa-trash-alt"></i></li>
      </ul>
    </div>
  )
}