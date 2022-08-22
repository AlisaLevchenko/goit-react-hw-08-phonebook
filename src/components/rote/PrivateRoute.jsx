import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from '../../redux/auth/authSelector';

const PrivateRoute = ({ component: Component }) => {
  const isAuth = useSelector(getIsAuth);
  return isAuth ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.object,
};
