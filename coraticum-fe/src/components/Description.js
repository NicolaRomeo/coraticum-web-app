import React, { Component } from "react";

class Description extends Component {

  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  state = {
    data: []
  };
state= {showForm: false}

showForm = () => {
   return (
    <form action="http://178.128.146.122:9090/create-checkout-session" method="POST">
      <button type="submit" >Click to Pre-Order</button>
    </form>
     );
}
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
          src="./bottle-pic.jpeg"
          height="300"
          width="300"
          alt="coraticum label"
          className="img"
          style={{ marginLeft: "150px" }}
        ></img>
        <br/>
        <br/>
        <div className='mask' style={{left: "500px", top: "1000px", bottom: "500px", position:"absolute" }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                <p style={{marginTop: "30px", marginRight: "250px", float: "right", position:"relative"}}>
        <i>
        <br/>
        Handmade production by The Spiritual Machine, Piazza Teresa Noce, 17 D, 10155 Torino TO. Limited stock.
        <br/>
        Gin, chestnuts tincture, flowers tincture, roses.
                <br/>
                        You will only be charged when the product is actually shipped.
                        <br/>
                        For all questions please contact nromeo@coraticumwebapp.com
        </i>

        </p>
                              <br/>


                              <br/>
        <br/>

              </div>

        </div>
                                  <div className='text-white' style={{position: "absolute",  top: "1100px", left: "500px", clear: "both", height: "50px",  background: "linear-gradient(45deg, blue, red)"}}>
              <button className='btn btn-outline-light btn-lg' onClick={() => this.setState({showForm: true}) } href='#!' role='button'>
                Pre-order now for 18,90 €
              </button>
                            {this.state.showForm ? this.showForm() : null}
              </div>
              </div>
)}
  {!this.state.matches && (    <div className=".media-object">
    <hr/>
        <img
          src="./bottle-pic.jpeg"
          height="300"
          width="300"
          alt="coraticum label"
          className="img"
          style={{ marginLeft: "10px" }}
        ></img>
        <br/>
        <br/>
        <div className='mask' style={{left: "350px", top: "1200px", bottom: "500px", position:"absolute" }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                <p style={{marginTop: "30px", marginRight: "250px", float: "right", position:"relative"}}>
        <i>
        <br/>
        Handmade production by The Spiritual Machine, Piazza Teresa Noce, 17 D, 10155 Torino TO. Limited stock.
        <br/>
        Gin, chestnuts tincture, flowers tincture, roses.
                <br/>
                        You will only be charged when the product is actually shipped.
                        <br/>
                        For all questions please contact nromeo@coraticumwebapp.com
        </i>

        </p>
                              <br/>


                              <br/>
        <br/>

              </div>

        </div>
                                  <div className='text-white' style={{position: "absolute",  top: "1000px", left: "350px", clear: "both", height: "50px", width: "225px", background: "linear-gradient(45deg, blue, red)"}}>
              <button className='btn btn-outline-light btn-lg' onClick={() => this.setState({showForm: true}) } href='#!' role='button'>
                Pre-order for 18,90 €
              </button>
                            {this.state.showForm ? this.showForm() : null}
              </div>
              </div>)}

</div>
    );
  }
}

export default Description;