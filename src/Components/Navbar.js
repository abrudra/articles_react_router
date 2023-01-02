import { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      TextDecoderation: isActive ? "none" : "underline",
      background: isActive ? "rgb(209 233 233)" : "none",
    };
  };
  render() {
    return (
      <nav className="nav-class">
        <NavLink className="navlink" style={this.navLinkStyle} to="/">
          <img
            alt="logo"
            className="logo"
            src="https://www.svgrepo.com/show/35381/white-home.svg"
          />{" "}
          Home
        </NavLink>
        <NavLink className="navlink" style={this.navLinkStyle} to="articles">
          <img
            alt="logo"
            className="logo"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/index-8-725299.png"
          />
          Articls
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
