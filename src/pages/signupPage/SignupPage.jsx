import AuthorizationForm from '../../components/authorizationForm/AuthorizationForm';
import s from '../../components/authorizationForm/AuthorizationForm.module.css';

const SignupPage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Let's Sign Up!</h1>
      <AuthorizationForm title="Sign Up" />
    </div>
  );
};

export default SignupPage;
