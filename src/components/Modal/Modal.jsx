import { Component } from "react"

class Modal extends Component {

   componentDidMount() { 
      document.addEventListener('keydown', handleESC)
   }

   componentWillUnmount() { }

   handleESC = (e) => { 
      if (e.code === 'Escape') { 
         this.props.close()
      }
   }

   const { children, close} = this.props
   state = {}
   render() {
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
