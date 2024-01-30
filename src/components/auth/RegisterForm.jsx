import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const { email, name, password } = e.target.elements;

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );

    console.log({
      name: name.value,
      email: email.value,
      password: password.value,
    });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <p>
        Thank you for your interest in our platform. To complete the
        registration process, please provide us with the following information.
      </p>
      <form onSubmit={handleSubmit}>
        <input placeholder="name" type="text" name="name" />
        <input placeholder="email" type="email" name="email" />
        <input placeholder="password" type="password" name="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
