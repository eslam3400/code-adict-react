import React ,{useState} from 'react'
import './AddTodo.css'

export default function AddTodo(props) {
  // State
  const [add,setAdd] = useState({ display: "none" })
  // Vars
  const todoContent = document.getElementById("todoContent");
  // Methods
  const showAddButton = (e)=>{
    setAdd({display:"block"})
    if ( e.target.value === "") setAdd({ display: "none" })
  }
  const addTodo = ()=>{
    props.add([...props.prevTodos,{content:todoContent.value,id:props.prevTodos.length}])
    setAdd({display:"none"})
    todoContent.value = ""
  }
  // View
  return (
    <div className="addTodo">
      <label htmlFor="addTodo"><i className="fas fa-plus-circle"></i></label>
      <input type="text" placeholder="Add ToDo" id="todoContent" onChange={showAddButton}/>
      <i className="fas fa-paper-plane addButton" style={add} onClick={addTodo}></i>
    </div>
  )
}