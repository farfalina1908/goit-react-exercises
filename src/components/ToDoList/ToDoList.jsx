import { Component } from "react"
import ToDo from "../ToDo/ToDo"
import todo from "../../todo.json"
import { nanoid } from "nanoid"

class ToDoList extends Component {
   state = {
      todoList: todo,
      nameTodo: "",
      isCreated: false,
   }

   handleCheck = (id) => {
      this.setState((prevState) => {
         return {
            todoList: prevState.todoList.map((el) =>
               el.id === id ? { ...el, completed: !el.completed } : el
            ),
         }
      })
   }

   componentDidUpdate(prevProps, prevState) {
      if (this.state.todoList.length > prevState.todoList.length) {
         this.setState({ isCreated: true })
         setTimeout(() => {
            this.setState({ isCreated: false })
         }, 1500)
      }
   }

   handleChange = ({ target }) => {
      this.setState({ nameTodo: target.value })
   }

   handleSubmit = (e) => {
      e.preventDefault()
      this.setState((prev) => {
         return {
            todoList: [
               ...prev.todoList,
               {
                  id: nanoid(),
                  title: this.state.nameTodo,
                  completed: false,
               },
            ],
         }
      })
      this.setState({ nameTodo: "" })
   }

   handleDelete = (id) => {
      this.setState((prev) => ({
         todoList: prev.todoList.filter((el) => el.id !== id),
      }))
   }

   render() {
      return (
         <>
            {this.state.isCreated && (
               <div class="alert alert-primary" role="alert">
                  Created To-Do successfully!
               </div>
            )}
            <form onSubmit={this.handleSubmit}>
               <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                     To-Do Name
                  </label>
                  <input
                     name="nameTodo"
                     type="text"
                     className="form-control"
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     onChange={this.handleChange}
                     value={this.state.nameTodo}
                  />
               </div>
            </form>
            <h1>My To-Do list</h1>
            <ul className="list-group list-group-flush">
               {this.state.todoList.map((todo) => (
                  <ToDo
                     handleDelete={() => this.handleDelete(todo.id)}
                     check={this.handleCheck}
                     key={todo.id}
                     todo={todo}
                  />
               ))}
            </ul>
         </>
      )
   }
}

export default ToDoList
