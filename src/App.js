import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import './App.css';
import ContactForm from './ContactForm';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = e => {
    e.preventDefault();
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: this.state.name, number: this.state.number },
      ],
    }));
  };

  // onInput = e => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  contactFilter = e => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, number, filter } = this.state;
    const contactFilter = this.contactFilter();

    return (
      <div>
        <>
          <h1>Телефонна книга</h1>
          <ContactForm />
          <h2>Список контактів</h2>
          <h3>Пошук контактів</h3>
          <input type="text" name="filter" value={filter} onChange={this.changeFilter}></input>
          <ul>
            {contactFilter.map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}
              </li>
            ))}
          </ul>
        </>
      </div>
    );
  }
}

Phonebook.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Phonebook;
