import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import StudentList from "./StudentList";
import NewStudentModal from "./NewStudentModal";
import { Button,Form,Modal} from 'react-bootstrap';
import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
state= {showForm: false, openContactForm: false}

showForm = () => {
   return (
    <form action="http://178.128.146.122:9090/create-checkout-session" method="POST">
      <button type="submit" >Pre-Order for 18,90€</button>
    </form>
     );
}
  handleModal() {
    this.setState({show:!this.state.show})
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

sendContactForm = (event) => {
    event.preventDefault();
    // Using Axios - ensure you first install the package
    //http://178.128.146.122:9090/send-email
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





  render() {
    return (
            <div className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'><i>Coraticum</i></h1>
              <h4 className='mb-3'>We poured the spirit of our ancestors into a bottle</h4>
              <h4 className='mb-3'>to inspire you to do your best</h4>
              <button className='btn btn-outline-light btn-lg'  onClick={() => this.setState({openContactForm: true}) }  role='button'>
                Contact
              </button>
              {this.state.showForm ? this.showForm() : null}
              {this.state.openContactForm ? this.openContactForm() : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;