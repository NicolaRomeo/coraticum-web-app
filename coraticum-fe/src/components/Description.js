import React, { Component } from "react";
import { Button,Form,Modal} from 'react-bootstrap';
import axios from 'axios';
class Description extends Component {

  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

state= {showForm: false, openContactForm: false, show: false}

  handleModal() {
    this.setState({show:!this.state.show})
  }

showForm = () => {
   return (
    <form action="http://178.128.146.122:9090/create-checkout-session" method="POST">
      <button type="submit" >Click to Pre-Order</button>
    </form>
     );
}


openContactForm = () => {
   return (
         <div>
        <div className="modalClass">
          <Button onClick={()=>this.handleModal()}>Click To Open Contact Form</Button>
        </div>

        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
    <Form>
      <Form.Group className="mb-3" controlId="sender">
        <Form.Label>Your Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="email_body">
        <Form.Label>Insert your request here</Form.Label>
        <Form.Control as="textarea" rows={8}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={this.sendContactForm} >
        Submit
      </Button>
    </Form>
        </Modal>
             </div>
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
        Handmade in Italy. Limited stock.
                        <br/>
                        For all questions please fill out the form
                                     <br/>
                  or contact nromeo@coraticumwebapp.com
        </i>

        </p>
                              <br/>


                              <br/>
        <br/>

              </div>

        </div>
                                  <div className='text-white' style={{position: "absolute",  top: "1100px", left: "500px", clear: "both", height: "50px",  background: "linear-gradient(45deg, blue, red)"}}>
              <button className='btn btn-outline-light btn-lg' onClick={() => this.setState({openContactForm: true}) } href='#!' role='button'>
                Ask more info
              </button>
                            {this.state.openContactForm ? this.openContactForm() : null}
              </div>
              </div>
)}
  {!this.state.matches && (    <div className=".media-object">
    <hr/>
        <img
          src="./bottle-pic.jpeg"
          height="200"
          width="200"
          alt="coraticum label"
          className="img"
          style={{ marginLeft: "10px" }}
        ></img>
        <br/>
        <br/>
        <div className='mask' style={{left: "250px", top: "950px", bottom: "500px", position:"absolute" }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                <p style={{marginTop: "30px", marginRight: "250px", float: "right", position:"relative"}}>
        <i>
        <br/>
        <br/>
        Handmade in Italy. Limited stock.
                        <br/>
                        For all questions please fill out the form
                                     <br/>
                  or contact nromeo@coraticumwebapp.com
        </i>

        </p>
                              <br/>


                              <br/>
        <br/>

              </div>

        </div>
                                  <div className='text-white' style={{position: "absolute",  top: "1100px", left: "10px", clear: "both", height: "50px", width: "225px", background: "linear-gradient(45deg, blue, red)"}}>
              <button className='btn btn-outline-light btn-lg' onClick={() => this.setState({openContactForm: true}) } href='#!' role='button'>
                Ask more info
              </button>
                            {this.state.openContactForm ? this.openContactForm() : null}
              </div>
              </div>)}

</div>
    );
  }


sendContactForm = (event) => {
    event.preventDefault();
    // Using Axios - ensure you first install the package
    axios.post('http://178.128.146.122:9090/send-email', {
        // Add parameters here
        sender : document.getElementById("sender").value,
        email_body : document.getElementById("email_body").value,
      })
      .then((response) => {
        this.setState({openContactForm: false})
          // Handle data
      })
      .catch((error) => {
        console.log(error);
      })
}
}

export default Description;