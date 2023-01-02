import { Component } from "react";
import { Link } from "react-router-dom";
// import Arcticle from "./Arcticle"

let data = [
  {
    title: "How to handle state in React. The missing FAQ.",
    author: "Osmel Mora",
    slug: "handle-state-in-react",
  },
  {
    title: "You might not need React Router",
    author: "Konstantin Tarkus",
    slug: "no-need-to-use-react-router",
  },
  {
    title: "Mixins Considered Harmful",
    author: "Dan Abramov",
    slug: "mixins-considered-harmful",
  },
  {
    title: "React Design Principles",
    author: "Dan Abramov",
    slug: "react-design-principles",
  },
  {
    title: "Don't use .bind() when passing props",
    author: "Dave Ceddia",
    slug: "don-use-bind-when-passing-props",
  },
];

class Articles extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  handleEvent = (event) => {
    let { name, value } = event.target;
    if (name === "search") {
      this.setState({
        search: value,
      });
    }
  };
  render() {
    let searchArticle = data.filter((article) =>
      article.title.toLowerCase().includes(this.state.search)
    );
    return (
      <div className="articla-main">
        <div>
          <input
            className="article-input"
            type="search"
            placeholder="Search"
            name="search"
            value={this.state.search}
            onChange={this.handleEvent}
          />
        </div>
        <ul className="articles">
          {searchArticle.map((article) => (
            <li>
              <Link to={`${article.slug}`}>
                <h3>{article.title}</h3>
              </Link>
              <small>{article.author}</small>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Articles;
