import React,{useState} from 'react';
import Todo from '../todo/Todo.jsx';
import './TodoList.css';

export default function TodoList({tasks,setTasks}) {
  const [showFinishedTasks, setShowFinishedTasks] = useState(false)
  const unFinishedTasks = []
  const finishedTasks = []
  tasks.forEach(task => {
    if (task.done) finishedTasks.push(task)
    else unFinishedTasks.push(task)
  });
  return (
    <>
      <div className="tasksList">
        {unFinishedTasks.map(task=><Todo key={task.id} tasks={tasks} setTasks={setTasks} task={task}/>)}
      </div>
      <div className="tasksList doneTasks">
        <p className="doneTasksTitle" onClick={e=>setShowFinishedTasks(!showFinishedTasks)}>Finished Tasks: {finishedTasks.length} {showFinishedTasks? <i className="fas fa-caret-up"></i>:<i className="fas fa-caret-down"></i>}</p>
        {showFinishedTasks ? finishedTasks.map(task=><Todo key={task.id} tasks={tasks} setTasks={setTasks} task={task}/>):null}
      </div>
      <div style={{ marginBottom:"15%" }}></div>
    </>
  )
}