import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewUserForm extends React.Component {
  state = {
    name: "",
    surname: "",
    email: "",
    address: "",
    postal_code: "",
    country: "",
    phone: ""
  };

  componentDidMount() {
    if (this.props.user) {
      const { name, surname, email, address, postal_code, country,phone } = this.props.user;
      this.setState({ name, surname, email, address, postal_code, country,phone });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createUser = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editUser = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.user ? this.editUser : this.createUser}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
                <FormGroup>
          <Label for="surname">Surname:</Label>
          <Input
            type="text"
            name="surname"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.surname)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address:</Label>
          <Input
            type="text"
            name="address"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.address)}
          />
        </FormGroup>
         <FormGroup>
          <Label for="postal_code">Postal Code:</Label>
          <Input
            type="text"
            name="postal_code"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.postal_code)}
          />
        </FormGroup>
                 <FormGroup>
          <Label for="country">Country:</Label>
          <Input
            type="text"
            name="country"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.country)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone:</Label>
          <Input
            type="text"
            name="phone"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewUserForm;