import React from "react";
import { connect } from "react-redux";
// const mapStateToProps = state => {
//   return { articles: state.articles };
// };
const ConnectedList = ({ articles }) => {
  return(
        <div>
            <ul className="list-group list-group-flush">
                {articles.map(article => (
                <li className="list-group-item" key={article.id}>
                    {article.title}
                </li>
                ))}
            </ul>
        </div>
        // console.log(articles)
      ) 
}

const mapStateToProps = state => {
    return {
      articles: state.articles
    }
  }

// console.log(articles)

export default connect(mapStateToProps)(ConnectedList);