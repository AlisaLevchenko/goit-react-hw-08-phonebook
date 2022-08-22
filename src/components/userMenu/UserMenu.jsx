import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSelector';
import { Button } from '@mui/material';
import { logOutUser } from 'redux/auth/authOperations';

function UserMenu() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{name}</p>
      <Button variant="contained" onClick={() => dispatch(logOutUser())}>
        LOG OUT
      </Button>
    </div>
  );
}

export default UserMenu;
