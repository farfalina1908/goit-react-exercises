import React from "react"

const ToDo = ({ todo, check, handleDelete }) => {
   function handleCheck() {
      check(todo.id)
   }
   return (
      <li className="list-group-item">
         <div className="row justify-content-between">
            <div className="col-10">
               <input
                  onChange={handleCheck}
                  checked={todo.completed}
                  className="form-check-input me-2"
                  type="checkbox"
               />
               {todo.title}
            </div>
            <div className="col">
               <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleDelete}
               ></button>
            </div>
         </div>
      </li>
   )
}

export default ToDo
