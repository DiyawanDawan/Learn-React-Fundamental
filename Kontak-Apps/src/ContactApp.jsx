
import React from "react";
import ContactList from "./ContactList"
import { getData } from "./data"
import ContactInput from "./components/ContactInput";

export default class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          contacts: getData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this)
    }
    onDeleteHandler(id) {
        const contacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({ contacts });
      }
      onAddContactHandler({name, tag}){
        this.setState((prevState) => {
          return {
            contacts: [
              ...prevState.contacts,
              {
                id: new Date(),
                name,
                tag,
                imageUrl: '/images/default.jpg',
              }
            ]
          }
        })
      }
      render() {
        return (
          <div className="contact-app">
            <h1>Daftar Kontak</h1>
            <ContactInput addContct={this.onAddContactHandler}/>
            <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
          </div>
        );
    }
}

 
//  ContactApp