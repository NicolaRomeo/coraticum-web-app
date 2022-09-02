import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import StudentList from "./StudentList";
import NewStudentModal from "./NewStudentModal";
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
state= {showForm: false}

showForm = () => {
   return (
    <form action="http://0.0.0.0:8000/create-checkout-session" method="POST">
      <button type="submit" >Pre-Order for 18,90€</button>
    </form>
     );
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
              <button className='btn btn-outline-light btn-lg'  onClick={() => this.setState({showForm: true}) } role='button'>
                Pre-order
              </button>
              {this.state.showForm ? this.showForm() : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;