// import { Card } from "./card/Card"
import Header from "./Header/Header"
import Counter from "./Counter/Counter"
// import ToDoList from "./ToDoList/ToDoList"
import Modal from "./Modal/Modal"
import { Component } from "react"

// -------------- Exersise 1 Card --------------

// const App = () => {
//     return <Card />
// }

// --------- Exersise 2 -----------------------

class App extends Component {
   state = { isShowModal: false }

   openModal = () => {
      this.setState({ isShowModal: true })
   }

   closeModal = () => {
      this.setState({ isShowModal: false })
   }

   render() {
      return (
         <div className="Container">
            <Header open={this.openModal} />
            {/* <Counter /> */}
            {/* <ToDoList /> */}
            {this.state.isShowModal && (
               <Modal close={this.closeModal}> some</Modal>
            )}
         </div>
      )
   }
}

export default App
