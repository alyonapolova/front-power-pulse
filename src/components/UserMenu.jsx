import { useDispatch, useSelector } from 'react-redux';
import { loginSelect } from '../redux/auth/selectors';
import { logout } from '../redux/auth/authSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector(loginSelect);
  return (
    <div>
      {login}
      <button type="button" onClick={() => dispatch(logout())}>
        LogOut
      </button>
    </div>
  );
};
