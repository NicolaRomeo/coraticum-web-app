import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
        <Product />
      </Fragment>
    );
  }
}

export default App;