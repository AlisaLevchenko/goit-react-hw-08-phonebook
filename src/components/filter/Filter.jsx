import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/ContactsSlice';
import { getFilter } from '../../redux/contacts/ContactsSelectors';
import { TextField, Box } from '@mui/material';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        fullWidth
        id="name"
        label="Find contact by name"
        name="name"
        type="text"
        value={filter}
        onChange={evt => dispatch(filterContacts(evt.target.value))}
      />
    </Box>
  );
}

export default Filter;
