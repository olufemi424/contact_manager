import React, { Component } from "react";

class AddContact extends Component {
  //SET THE STATE OF THE INPUT FIELDS
  state = {
    name: "",
    email: "",
    phone: "",
    address: ""
  };
  // ON SUBMIT HANDLER
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  //   GENERAL EVENT LISTENER FOR EACH OF THE FORMS
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    //DESTRUCTURING THE STATE INTO RENDER FUNCTION
    const { name, email, phone, address } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name"
                //SET THE VALUE INPUT TO THE STATE
                value={name}
                //TRIGGER EVENT LISTENER
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter email"
                //SET THE VALUE INPUT TO THE STATE
                value={email}
                //TRIGGER EVENT LISTENER
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone"
                //SET THE VALUE INPUT TO THE STATE
                value={phone}
                //TRIGGER EVENT LISTENER
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                className="form-control form-control-lg"
                placeholder="Enter Address"
                //SET THE VALUE INPUT TO THE STATE
                value={address}
                //TRIGGER EVENT LISTENER
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-block btn-light"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
