import React from "react"

export default function TodoList() {

  return <div>
    <ul style={{listStyleType: "none", paddingLeft: 0}}>
      {[true, true].map(_ =>
        <TodoItem/>
      )}
    </ul>
    <Footer/>
  </div>
}

function TodoItem({todo, toggleTodo, removeTodo}) {
  return <li style={{cursor: "pointer"}}>
    <div className="form-group">
      <div className="form-check">
        <input type="checkbox" onChange={_ => null} checked={true} style={{cursor: "pointer"}} className="form-check-input"/>
        <span className="form-check-label">
          <span>Text</span>
          <button type="button"
                  className="btn btn-secondary ml-2"
                  style={{lineHeight: 1, padding: "0.125rem .25rem"}}>
            &times;
          </button>
        </span>
      </div>
    </div>
  </li>
}

function Footer() {
  return <div>
    <p>
      Show:
      {" "}
      <a href="#all"><b>All</b></a>
      {", "}
      <a href="#active"><b>Active</b></a>
      {", "}
      <a href="#done"><b>Done</b></a>
    </p>
  </div>
}
