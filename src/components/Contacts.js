import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555",
        address: "12 artesian ave"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karenw@gmail.com",
        phone: "444-444-4445",
        address: "22 western ave"
      },
      {
        id: 3,
        name: "Mark Daniel",
        email: "markd@gmail.com",
        phone: "465-465-4655",
        address: "34 kigil ave"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
