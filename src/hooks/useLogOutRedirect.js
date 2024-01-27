import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isLoggedInSelect } from '../redux/auth/selectors';

export const useLogOutRedirect = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(isLoggedInSelect);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { replace: true });
    }
  }, [isLoggedIn, navigate]);
};
