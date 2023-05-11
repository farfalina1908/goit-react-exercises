import { Component } from "react"

class Modal extends Component {
   componentDidMount() {
      document.addEventListener("keydown", this.handleESC)
   }

   componentWillUnmount() {
      document.removeEventListener("keydown", this.handleESC)
   }

   handleESC = (e) => {
      console.log("esc")
      if (e.code === "Escape") {
         this.props.close()
      }
   }

   // state = {}
   render() {
      const { children, close } = this.props
      return (
         <div
            className="modal fade show"
            style={{ display: "block", backdropFilter: "blur(5px)" }}
         >
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title"> Modal</h5>
                     <button
                        onClick={close}
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                     ></button>
                  </div>
                  <div className="modal-body">{children}</div>
               </div>
            </div>
         </div>
      )
   }
}

// const Modal = ({ children, close }) => {
//    return (
//       <div
//          className="modal fade show"
//          style={{ display: "block", backdropFilter: "blur(5px)" }}
//       >
//          <div className="modal-dialog">
//             <div className="modal-content">
//                <div className="modal-header">
//                   <h5 className="modal-title"> Modal</h5>
//                   <button
//                      onClick={close}
//                      type="button"
//                      className="btn-close"
//                      aria-label="Close"
//                   ></button>
//                </div>
//                <div className="modal-body">{children}</div>
//             </div>
//          </div>
//       </div>
//    )
// }

export default Modal
