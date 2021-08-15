import React from 'react';
import './Todo.css';

export default function Todo({task,toggleTaskCompletion}) {
  // Vars
  let contentStyle = (task.done) ? {textDecoration: "line-through"}:{textDecoration: "none"};
  
  // const deleteTodo = ()=>{
  //   const newTodos = tasks.filter(element => element.id !== task.id );
  //   setTasks(newTodos);
  //   save(newTodos);
  // }

  return (
    <div className="task" style={{ backgroundColor: task.done?"#58d69d":"antiquewhite" }}>
      {task.done ?<i className="fas fa-minus" onClick={ e => toggleTaskCompletion(task.id)}></i> :<i className="fas fa-check" onClick={e => toggleTaskCompletion(task.id)}></i>}
      <p id={'content-'+task.id} style={contentStyle}>{task.content}</p>
      {/* <ul>
        <li><i className="fas fa-edit"></i></li>
        <li onClick={deleteTodo} id={todo.id}><i className="fas fa-trash-alt"></i></li>
      </ul> */}
    </div>
  )
}