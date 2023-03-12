import { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import dataContacts from '../contactsdata.json';
import {
  StyledTitle,
  StyledContainer,
  StyledContactsTitle,
} from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContactformSubmit = ({ name, number }) => {

    let prevCont = contacts.map(({ name }) => name.toLowerCase());
    if (prevCont.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }
        const contact = {
      id: nanoid(),
      name,
      number,
    };
      setContacts(prevState => [contact, ...prevState])
  }
    const deleteContact = contactId => {
    setContacts(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

    const changeFilter = e => {
    setFilter(e.target.value.trim());
  };

    const getFilterName = () => {
    const normalisedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };


  return (
    <StyledContainer>
      <StyledTitle>Phonebook</StyledTitle>
      <ContactForm onSubmit={addContactformSubmit} />

      <StyledContactsTitle>Contacts</StyledContactsTitle>
      <Filter filter={changeFilter} />
      <ContactList contacts={getFilterName} onDelete={deleteContact} />
    </StyledContainer>
  );
};
// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   addContactformSubmit = ({ name, number }) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     let prevCont = this.state.contacts.map(({ name }) => name.toLowerCase());
//     if (prevCont.includes(name.toLowerCase())) {
//       alert(`${name} is already in contacts`);
//       return;
//     } else {
//       this.setState(({ contacts }) => ({
//         contacts: [contact, ...contacts],
//       }));
//     }
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.target.value.trim() });
//   };

//   getFilterName = () => {
//     const { filter, contacts } = this.state;
//     const normalisedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalisedFilter)
//     );
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts !== null) {
//       const parsedInfoContacts = JSON.parse(savedContacts);
//       this.setState({ contacts: parsedInfoContacts });
//       return;
//     }
//     this.setState({ contacts: dataContacts });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const contacts = this.getFilterName();
//     return (
//       <StyledContainer>
//         <StyledTitle>Phonebook</StyledTitle>
//         <ContactForm onSubmit={this.addContactformSubmit} />

//         <StyledContactsTitle>Contacts</StyledContactsTitle>
//         <Filter filter={this.changeFilter} />
//         <ContactList contacts={contacts} onDelete={this.deleteContact} />
//       </StyledContainer>
//     );
//   }
// }
