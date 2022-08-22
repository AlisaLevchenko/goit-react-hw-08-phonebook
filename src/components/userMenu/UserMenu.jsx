import { useDispatch, useSelector } from 'react-redux';
// import { AiOutlineLogout } from 'react-icons/ai';
import { getUserEmail } from 'redux/auth/authSelector';
import { Button } from '@mui/material';
import { logOutUser } from 'redux/auth/authOperations';

function UserMenu() {
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{email}</p>
      <Button variant="contained" onClick={() => dispatch(logOutUser())}>
        LOG OUT &nbsp;
        {/* <AiOutlineLogout /> */}
      </Button>
    </div>
  );
}

export default UserMenu;
