import { NavLink } from 'react-router-dom';
import { UserMenu } from './UserMenu';
import { useSelector } from 'react-redux';
import { isLoggedInSelect } from '../redux/auth/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(isLoggedInSelect);
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 8,
        borderBottom: '1px solid black',
      }}
    >
      <nav
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/user">User Page</NavLink>}
        {!isLoggedIn && <NavLink to="/register">Sign Up</NavLink>}
        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
