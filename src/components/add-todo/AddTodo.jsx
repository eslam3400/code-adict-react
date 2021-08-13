import React ,{useState} from 'react'
import './AddTodo.css'

export default function AddTodo(props) {
  // State
  const [showAddButton,setShowAddButton] = useState(false);
  // Vars
  const todoContent = document.getElementById("todoContent");
  // Methods
  const setId = ()=> Math.floor(Math.random() * 999999999);

  const addButtonOnChangeHandler = e => e.target.value === "" ? setShowAddButton(false) : setShowAddButton(true);

  const addTodo = ()=>{
    let newTodos = [...props.prevTodos,{id:setId(),content:todoContent.value,done:false}];
    props.add(newTodos);
    setShowAddButton(false);
    todoContent.value = "";
    localStorage.setItem("todos",JSON.stringify(newTodos));
  }

  const addTodoOnEnterPress = e => e.key === 'Enter' ? addTodo() : null;
  
  // View
  return (
    <section className="addTodo">
      <label htmlFor="addTodo"><i className="fas fa-plus-circle"></i></label>
      <input type="text" placeholder="Add ToDo" id="todoContent" onChange={addButtonOnChangeHandler} onKeyPress={addTodoOnEnterPress}/>
      <i className="fas fa-paper-plane addButton" style={{ visibility: showAddButton ? "visible" : "hidden" }} onClick={addTodo}></i>
    </section>
  )
}