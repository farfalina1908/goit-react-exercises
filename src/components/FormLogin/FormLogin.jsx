import { Component } from "react"

class FormLogin extends Component {
   state = {
      email: "",
      password: "",
      isChecked: false,
      gender: "",
   }

   componentDidMount() {
      console.log("Mount")
   }

   componentDidUpdate(prevProps, prevState) {
      console.log("Update")
   }

   componentWillUnmount() {
      console.log("Unmount")
   }

   handleChange = ({ target: { value, name } }) => {
      this.setState({
         [name]: value,
      })
   }

   validator = ({ target: { value, name } }) => {
      if (name === "password") {
         !value.includes("!") && alert('Password must include "!"')
      }
   }

   handleSubmit = (e) => {
      e.preventDefault()
      this.props.createUser({
         email: this.state.email,
         userpassword: this.state.password,
      })
      // this.props.close()
      this.setState({
         email: "",
         password: "",
         isChecked: false,
      })
   }

   handleCheck = ({ target: { checked } }) => {
      this.setState({
         isChecked: checked,
      })
   }

   handleGender = ({ target: { name } }) => {
      this.setState({ gender: name })
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
               </label>
               <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={this.handleChange}
                  value={this.state.email}
               />
               <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
               </div>
            </div>
            <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
               </label>
               <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={this.handleChange}
                  value={this.state.password}
                  onBlur={this.validator}
                  disabled={!this.state.email}
               />
            </div>
            <div class="mb-3 form-check">
               <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  checked={this.state.isChecked}
                  onChange={this.handleCheck}
               />
               <label className="form-check-label" htmlFor="exampleCheck1">
                  I agree
               </label>
            </div>
            <div className="mb-3 form-check">
               <input
                  className="form-check-input"
                  type="radio"
                  name="mail"
                  id="flexRadioDefault1"
                  checked={this.state.gender === "mail"}
                  onChange={this.handleGender}
               />
               <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Mail
               </label>
            </div>
            <div className="mb-3 form-check">
               <input
                  className="form-check-input"
                  type="radio"
                  name="femail"
                  id="flexRadioDefault2"
                  checked={this.state.gender === "femail"}
                  onChange={this.handleGender}
               />
               <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Femail
               </label>
            </div>
            <div className="mb-3 form-check">
               <input
                  className="form-check-input"
                  type="radio"
                  name="other"
                  id="flexRadioDefault3"
                  checked={this.state.gender === "other"}
                  onChange={this.handleGender}
               />
               <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Other
               </label>
            </div>
            <button
               type="submit"
               className="btn btn-primary"
               disabled={
                  !this.state.email ||
                  !this.state.password ||
                  !this.state.isChecked
               }
            >
               Submit
            </button>
         </form>
      )
   }
}

export default FormLogin
