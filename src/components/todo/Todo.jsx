import React from 'react';
import './Todo.css';

export default function Todo({tasks,setTasks,task}) {
  // Vars
  let contentStyle = (task.done) ? {textDecoration: "line-through"}:{textDecoration: "none"};
  // Methods
  const save = todos => localStorage.setItem("tasks",JSON.stringify(todos));
  
  const deleteTodo = ()=>{
    const newTodos = tasks.filter(element => element.id !== task.id );
    setTasks(newTodos);
    save(newTodos);
  }
  
  const toggelCheckDone = ()=>{
    const newTodos = tasks.map(element => {
      if (element.id === task.id) task.done = !task.done;
      return element;
    });
    setTasks(newTodos);
    save(newTodos);
  }

  return (
    <div className="task" style={{ backgroundColor: task.done?"#58d69d":"antiquewhite" }}>
      {task.done ?<i className="fas fa-minus" onClick={toggelCheckDone}></i> :<i className="fas fa-check" onClick={toggelCheckDone}></i>}
      <p id={'content-'+task.id} style={contentStyle}>{task.content}</p>
      {/* <ul>
        <li><i className="fas fa-edit"></i></li>
        <li onClick={deleteTodo} id={todo.id}><i className="fas fa-trash-alt"></i></li>
      </ul> */}
    </div>
  )
}