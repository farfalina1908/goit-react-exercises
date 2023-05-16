import { Component } from "react"
import { getSearchNews } from "../../api/getSearchNews"

class ContentInfo extends Component {
   state = {articles: []}

   componentDidUpdate(prevProps, prevState) {
      const text = this.props.searchText.trim()
      if (prevProps.searchText !== text && text) {
         //  console.log(this.props.searchText)

         getSearchNews(text).then(({ articles }) => { this.setState ({ articles}) })
      }
   }
   render() {
      const{ articles} = this.state
      return (
       articles.length > 0 && (<ul className="list-group mt-3">
               {articles.map((el) => (
                  <li key={el.title} className="list-group-item">
                     {el.title}
                  </li>
               ))}
            </ul>)
            
        
      );
   }
}

export default ContentInfo
