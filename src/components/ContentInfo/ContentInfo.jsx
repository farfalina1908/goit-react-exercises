import { Component } from "react"
import { getSearchNews } from "../../api/getSearchNews"

const STATUS = {
   IDLE: "IDLE",
   PENDING: "PENDING",
   FULFILLED: "FULFILLED",
   REJECTED: "REJECTED",
}
class ContentInfo extends Component {
   state = { articles: null, error: "", status: STATUS.IDLE }

   componentDidUpdate(prevProps, prevState) {
      const text = this.props.searchText.trim()
      if (prevProps.searchText !== text && text) {
         //  console.log(this.props.searchText)
         this.setState({ status: STATUS.PENDING })
         getSearchNews(text)
            .then((data) => {
               if (data.articles)
                  return this.setState({
                     articles: data.articles,
                     status: STATUS.FULFILLED,
                  })
               return Promise.reject(data.message)
            })
            .catch((error) => {
               // console.log(error)
               this.setState({ error, status: STATUS.REJECTED })
            })
      }
   }
   render() {
      const { articles, error, status } = this.state

      if (status === STATUS.PENDING)
         return (
            <div className="spinner-border text-success" role="status">
               <span className="visually-hidden">Loading...</span>
            </div>
         )
      else if (status === STATUS.FULFILLED) {
         if (articles.length === 0)
            return (
               <div className="alert alert-warning mt-3" role="alert">
                  No result
               </div>
            )
         return (
            <ul className="list-group mt-3">
               {articles.map((el) => (
                  <li key={el.title} className="list-group-item">
                     {el.title}
                  </li>
               ))}
            </ul>
         )
      } else if (status === STATUS.REJECTED)
         return (
            <div className="alert alert-danger mt-3" role="alert">
               {error}
            </div>
         )
   }
}

// class ContentInfo extends Component {
//    state = { articles: null, error: "", isLoading: false }

//    componentDidUpdate(prevProps, prevState) {
//       const text = this.props.searchText.trim()
//       if (prevProps.searchText !== text && text) {
//          //  console.log(this.props.searchText)
//          this.setState({ isLoading: true })
//          getSearchNews(text)
//             .then((data) => {
//                if (data.articles)
//                   return this.setState({
//                      articles: data.articles,
//                   })
//                return Promise.reject(data.message)
//             })
//             .catch((error) => {
//                // console.log(error)
//                this.setState({ error })
//             })
//             .finally(() => {
//                this.setState({ isLoading: false })
//             })
//       }
//    }
//    render() {
//       const { articles, error, isLoading } = this.state
//       return (
//          <>
//             {isLoading && (
//                <div className="spinner-border text-success" role="status">
//                   <span className="visually-hidden">Loading...</span>
//                </div>
//             )}
//             {error && (
//                <div className="alert alert-danger mt-3" role="alert">
//                   {error}
//                </div>
//             )}
//             {articles?.length > 0 && (
//                <ul className="list-group mt-3">
//                   {articles.map((el) => (
//                      <li key={el.title} className="list-group-item">
//                         {el.title}
//                      </li>
//                   ))}
//                </ul>
//             )}
//             {articles?.length === 0 && (
//                <div className="alert alert-warning mt-3" role="alert">
//                   No result
//                </div>
//             )}
//          </>
//       )
//    }
// }

export default ContentInfo
