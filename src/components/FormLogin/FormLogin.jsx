import { Component } from "react";

class FormLogin extends Component {
   state = {
      email: "",
      password: "",
   };

   handleChange = ({ target: { value, name } }) => {
      this.setState({
         [name]: value,
      });
   };

   validator = ({ target: { value, name } }) => {
      if (name === "password") {
         !value.includes("!") && alert('Password must include "!"');
      }
   };

    handleSubmit = (e) => { 
        e.preventDefault();
        this.props.createUser ({ 
            email: this.state.email,
            userpassword: this.state.password,
        })
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
               />
               <label className="form-check-label" for="exampleCheck1">
                  Check me out
               </label>
            </div>
            <button
               type="submit"
               className="btn btn-primary"
               disabled={!this.state.email || !this.state.password}
            >
               Submit
            </button>
         </form>
      );
   }
}
 
export default FormLogin;