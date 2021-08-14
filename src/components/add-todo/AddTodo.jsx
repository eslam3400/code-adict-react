import React ,{useState} from 'react'
import './AddTodo.css'

export default function AddTodo({setTasks,showInputHandler}) {
  // State
  const [showAddButton,setShowAddButton] = useState(false);
  // Vars
  const todoContent = document.getElementById("todoContent");
  // Methods
  const setId = ()=> Math.floor(Math.random() * 999999999);

  const addButtonOnChangeHandler = e => e.target.value === "" ? setShowAddButton(false) : setShowAddButton(true);

  const addTodo = ()=>{
    let prevTasks = JSON.parse(localStorage.getItem("tasks")) || []
    let newTasks = [...prevTasks,{id:setId(),content:todoContent.value,done:false}];
    setTasks(newTasks);
    setShowAddButton(false);
    todoContent.value = "";
    localStorage.setItem("tasks",JSON.stringify(newTasks));
    showInputHandler(false)
  }

  const addTodoOnEnterPress = e => e.key === 'Enter' ? addTodo() : null;
  
  // View
  return (
    <section className="addTodo">
      <label htmlFor="addTodoLabel  "><i className="fas fa-plus-circle"></i></label>
      <input autoFocus type="text" placeholder="Add ToDo" id="todoContent" onChange={addButtonOnChangeHandler} onKeyPress={addTodoOnEnterPress}/>
      <i className="fas fa-paper-plane addButton" style={{ visibility: showAddButton ? "visible" : "hidden" }} onClick={addTodo}></i>
    </section>
  )
}