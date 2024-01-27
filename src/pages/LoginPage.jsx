import { LoginForm } from 'components/auth/LoginForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isLoggedInSelect } from '../redux/auth/selectors';

export default function LoginPage() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isLoggedInSelect);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return <LoginForm />;
}
