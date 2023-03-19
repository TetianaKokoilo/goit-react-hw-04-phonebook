import { useState, useEffect } from 'react';
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

export function App() {
  const getDataLocalStorage = (
    key = 'contacts',
    defaultValue = dataContacts
  ) => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  };
  const [contacts, setContacts] = useState(getDataLocalStorage());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
    setContacts(prevState => [contact, ...prevState]);
  };
  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
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
}
