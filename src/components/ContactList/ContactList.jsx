import React from 'react';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { getFilterValue, getContacts } from 'redux/selectors';

export default function ContactList() {
  const contacts = useSelector(getContacts);

  const filterValue = useSelector(getFilterValue);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number}></ContactItem>
      ))}
    </ul>
  );
}
