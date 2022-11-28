import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="subtitle">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
