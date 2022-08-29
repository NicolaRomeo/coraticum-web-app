import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="./favicon.ico"
          alt="coraticum logo"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
        ></img>
        <hr />
        <h5>
          <i>presents</i>
        </h5>
      </div>
    );
  }
}

export default Header;