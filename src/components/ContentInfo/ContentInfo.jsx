import { Component } from "react"
import { getSearchNews } from "../../api/getSearchNews"

class ContentInfo extends Component {
   state = {}

   componentDidUpdate(prevProps, prevState) {
      const text = this.props.searchText.trim()
      if (prevProps.searchText !== text && text) {
         //  console.log(this.props.searchText)

         getSearchNews()
      }
   }
   render() {
      return <></>
   }
}

export default ContentInfo
