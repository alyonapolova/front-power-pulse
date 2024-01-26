import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e.target.elements);
    const { email, password } = e.target.elements;
    console.log(email.value, password.value);
    dispatch(login({ email: email.value, password: password.value }));
    email.value = '';
    password.value = '';
    console.log({
      email: email.value,
      password: password.value,
    });
  };
  return (
    <div>
      <h1>Sign In</h1>
      <p>Welcome! Please enter your credentials to login to the platform:</p>
      <form onSubmit={handleSubmit}>
        <input placeholder="email" type="email" name="email" />
        <input placeholder="password" type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
