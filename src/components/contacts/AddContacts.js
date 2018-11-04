import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  //SET THE STATE OF THE INPUT FIELDS
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
    errors: {}
  };

  // ON SUBMIT HANDLER
  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone, address } = this.state;

    // CHECK FOR ERRORS
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { name: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    // CONSTRUCTING A NEW CONTACT METHOD
    const newContact = {
      name,
      email,
      phone,
      address
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", newContact)
      .then(res => dispatch({ type: "ADD_CONTACT", payload: res.data }));
    // SEND IN THE NEW CONTACT AS THE PAYLOAD

    // CLEAR THE FORM FIELDS
    this.setState({
      name: "",
      email: "",
      phone: "",
      address: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  //   GENERAL EVENT LISTENER FOR EACH OF THE FORMS
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    //DESTRUCTURING THE STATE INTO RENDER FUNCTION
    const { name, email, phone, address, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    errors={errors.name}
                  />

                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    errors={errors.email}
                  />

                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    errors={errors.phone}
                  />

                  <TextInputGroup
                    label="Address"
                    name="address"
                    placeholder="Enter Address"
                    value={address}
                    onChange={this.onChange}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-light"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
