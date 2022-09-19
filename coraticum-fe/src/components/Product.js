import React, { Component } from "react";

class Product extends Component {

  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  state = {
    data: []
  };
    componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
  }

  render() {
    return (
        <div>
    {this.state.matches && (
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
        <p style={{left: "500px", top: "750px", bottom: "500px", position:"absolute"}}>
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
                      )}

  {!this.state.matches && (
      <div className=".media-object">
    <hr/>
        <img
          src="./label-1.png"
          height="200"
          width="200"
          alt="coraticum label"
          className="img"
          style={{ marginLeft: "10px" }}
        ></img>
        <p style={{left: "250px", top: "600px", bottom: "500px", position:"absolute"}}>
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
  )}



  </div>
    );
}
}

export default Product;