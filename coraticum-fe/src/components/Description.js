import React, { Component } from "react";

class Description extends Component {
  state = {
    data: []
  };
state= {showForm: false}

showForm = () => {
   return (
    <form action="http://localhost:8000/create-checkout-session" method="POST">
      <button type="submit">Pre-Order for 18,90€</button>
    </form>
     );
 }

  render() {
    return (
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
            <div className='text-white' style={{background: "linear-gradient(45deg, blue, red)"}}>
              <button className='btn btn-outline-light btn-lg' onClick={() => this.setState({showForm: true}) } href='#!' role='button'>
                Pre-order now for 18,90 €
              </button>
               <p style={{marginTop: "30px", marginRight: "250px", float: "right", position:"relative"}}>
        <i>You will only be charged when the product is actually shipped.
        <br/>
        <br/>
        Handmade production by The Spiritual Machine, Piazza Teresa Noce, 17 D, 10155 Torino TO
        <br/>
        Gin, chestnuts tincture, flowers tincture, roses
        </i>
        </p>
                            {this.state.showForm ? this.showForm() : null}
              </div>
              </div>
        </div>
              </div>

    );
  }
}

export default Description;