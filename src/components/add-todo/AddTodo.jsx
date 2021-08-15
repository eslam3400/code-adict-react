import React ,{useState} from 'react'
import './AddTodo.css'

export default function AddTodo({add,hide}) {
  // State
  const [showAddButton,setShowAddButton] = useState(false);
  // Vars
  const todoContent = document.getElementById("todoContent");
  // Methods
  const setId = ()=> Math.floor(Math.random() * 999999999);
  const addButtonOnChangeHandler = e => e.target.value === "" ? setShowAddButton(false) : setShowAddButton(true);
  const addTask = () =>{
    add({id:setId(),content:todoContent.value,done:false});
    setShowAddButton(false);
    todoContent.value = "";
    hide();
  }

  const addTodoOnEnterPress = e => e.key === 'Enter' ? addTask() : null;
  
  // View
  return (
    <section className="addTodo">
      <label htmlFor="todoContent"><i className="fas fa-plus-circle"></i></label>
      <input autoFocus type="text" placeholder="Add ToDo" id="todoContent" onChange={addButtonOnChangeHandler} onKeyPress={addTodoOnEnterPress}/>
      <i className="fas fa-paper-plane addButton" style={{ visibility: showAddButton ? "visible" : "hidden" }} onClick={addTask}></i>
    </section>
  )
}