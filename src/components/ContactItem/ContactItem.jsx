import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li className={css.contactItem}>
      <p className={css.contactText}>
        {name} {number}
      </p>
      <button
        className={css.contactBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
