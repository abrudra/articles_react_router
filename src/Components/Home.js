import { Component } from "react";
import { NavLink } from "react-router-dom";
// import Arcticle from "./Arcticle";

class Home extends Component {
  render() {
    return (
      <div className="home-class">
        <label style={{fontSize:"large"}}>🚀 Welcome to Homepage!</label>
        <NavLink to="articles">
          <div className="info">
            <h2 className="article-page">ARTICLES PAGE</h2>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default Home;
