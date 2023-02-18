import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import './App.css';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = e => {
    e.preventDefault();
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: this.state.name, number: this.state.number },
      ],
      name: '',
      number: '',
    }));
  };

  onInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, contacts, number } = this.state;
    return (
      <div>
        <>
          <h1>Телефонна книга</h1>
          <form onSubmit={this.addContact}>
            <h2>Ім'я</h2>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onInput}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />{' '}
            <h2>Номер</h2>
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.onInput}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />{' '}
            <button type="submit">Додати контакт</button>
          </form>
          <h2>Список контактів</h2>
          <ul>
            {contacts.map(({ id, name, number }) => (
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
