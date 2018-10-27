import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
