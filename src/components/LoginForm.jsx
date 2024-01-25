import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.name.value);
    dispatch(login(form.elements.name.value));
    form.reset();

    navigate('/user', { replace: true });
  };
  return (
    <div>
      <h1>Sign In</h1>
      <p>Welcome! Please enter your credentials to login to the platform:</p>
      <form onSubmit={handleSubmit}>
        <input placeholder="email" type="name" name="name" />
        {/* <input placeholder="password" type="password" name="password" /> */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
