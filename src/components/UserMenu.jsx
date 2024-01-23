import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/authSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const login = useSelector(state => state.auth.login);
  return (
    <div>
      {login}
      <button type="button" onClick={() => dispatch(logout())}>
        LogOut
      </button>
    </div>
  );
};
