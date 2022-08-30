import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product"
import Description from "./components/Description"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
        <Product />
        <Description/>
      </Fragment>
    );
  }
}

export default App;