// import { Card } from "./card/Card"
import Header from "./Header/Header"
import Counter from "./Counter/Counter"
import ToDoList from "./ToDoList/ToDoList"
import Modal from "./Modal/Modal"
import { Component } from "react"
import Parent from "./Parent/Parent"
import FormLogin from "./FormLogin/FormLogin"
import ContentInfo from "./ContentInfo/ContentInfo"
import Search from "./Search/Search"

// -------------- Exersise 1 Card --------------

// const App = () => {
//     return <Card />
// }

// --------- Exersise 2 -----------------------

class App extends Component {
   state = {
      isShowModal: false,
      searchText: "",
   }

   openModal = () => {
      this.setState({ isShowModal: true })
   }

   closeModal = () => {
      this.setState({ isShowModal: false })
   }

   createUser = (data) => {
      const newUser = {
         ...data,
         id: Date.now(),
         role: "customer",
      }
      console.log("newUser:", newUser)
   }

   handleSearch = (searchText) => {
      this.setState({ searchText })
   }

   render() {
      return (
         <div className="Container">
            <Header open={this.openModal} />
            {/* <Counter /> */}
            {/* <ToDoList /> */}
            <Search handleSearch={this.handleSearch} />

            <ContentInfo searchText={this.state.searchText} />
            {this.state.isShowModal && (
               <Modal close={this.closeModal}>
                  <FormLogin
                     close={this.closeModal}
                     createUser={this.createUser}
                  />
               </Modal>
            )}
         </div>
      )
   }

   // render() {
   //    return (
   //       <div className="Container">
   //          <Header open={this.openModal} />
   //          {/* <Counter /> */}
   //          <ToDoList />

   //          <Parent
   //                close={this.closeModal}
   //                isOpen={this.state.isShowModal}>
   //                some
   //          </Parent>

   //       </div>
   //    );
   // }
}

export default App
