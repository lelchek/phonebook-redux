import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../redux/actions";

class Contacts extends Component {
  state = {
    name: "",
    phone: ""
  };

  handleChange = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };
  addNewContact = e => {
    e.preventDefault();
    // const name = this.state.name;
    // const phone = this.state.phone;
    // так тоже можно, только указав свойство:значение
    this.props.addContact({
      name: this.state.name,
      phone: this.state.phone,
      id: 2
    });
  };

  render() {
    const { name, phone } = this.state;
    return (
      <div>
        {console.log("props->", this.props)}
        <h2>Contacts</h2>
        <form onSubmit={this.addNewContact}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            autoFocus
            value={name}
            onChange={this.handleChange}
          />
          <input
            type="tel"
            placeholder="Phone"
            name="phone"
            required
            value={phone}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h3>Filter</h3>
        <input type="search" placeholder="search name" name="search" />
        <h3>Contact List</h3>
        <ul>
          {this.props.contacts.map(contact => (
            <li key={contact.id}>
              <span>Name: {contact.name} </span>
              <span>Phone: {contact.phone}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state :", state);
  return {
    contacts: state.contacts
  };
};

// добавила этот метод
const mapDispatchToProps = {
  addContact
};

// addContact заменила на mapDispatchToProps в connect
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
