import React, { Component } from "react";

class Product extends Component {
  state = {
    data: []
  };
  render() {
    return (
    <div className=".media-object">
    <hr/>
        <img
          src="./label-1.png"
          height="300"
          width="300"
          alt="coraticum label"
          className="img"
          style={{ marginLeft: "150px" }}
        ></img>
        <p style={{marginTop: "30px", marginRight: "250px", float: "right", position:"relative"}}>
        <i>What a long path that we have behind!
        <br/>
        <br/>
        Take a moment
        to appreciate yourself
        with this 100% italian
        <br/>
        chestnuts and roses spirit
        </i>
        </p>
                <hr />
      </div>

    );
  }
}

export default Product;