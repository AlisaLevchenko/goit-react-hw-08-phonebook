import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Box, Button } from '@mui/material';
import { addContacts } from '../../redux/contacts/ContactsOperations';
import { getContacts } from '../../redux/contacts/ContactsSelectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChangeInput = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const repeatName = items.find(el => {
      return el.name.toLowerCase() === name.toLowerCase();
    });
    if (repeatName) {
      alert(`${name} ia already in contacts`);
      return;
    }
    const oneContact = { name, number };
    dispatch(addContacts(oneContact));
    resetForm();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        fullWidth
        id="name"
        label="Name"
        name="name"
        type="text"
        variant="standard"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChangeInput}
      />
      <TextField
        margin="normal"
        fullWidth
        id="number"
        label="Phone number"
        name="number"
        type="tel"
        variant="standard"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Number number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChangeInput}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add contact
      </Button>
    </Box>
  );
}
