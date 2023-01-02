import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <div className="Header-div">
          <div className="headingname">
            {" "}
            <img
              alt="logo"
              className="logo"
              src="https://cdn.iconscout.com/icon/free/png-256/dashboard-1739866-1481441.png"
            />{" "}
            Dashboard
          </div>
          <input
            className="searchinput"
            type="search"
            placeholder="Search for Document..."
          />
        </div>
      </>
    );
  }
}

export default Header;
