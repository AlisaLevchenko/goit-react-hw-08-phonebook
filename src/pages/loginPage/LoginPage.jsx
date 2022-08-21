import AuthorizationForm from '../../components/authorizationForm/AuthorizationForm';
import s from '../../components/authorizationForm/AuthorizationForm.module.css';

const LoginPage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Go to your acc!</h1>
      <AuthorizationForm title="Login" />
    </div>
  );
};

export default LoginPage;
