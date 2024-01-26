import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isLoggedInSelect } from '../../redux/auth/selectors';

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
        {!isLoggedIn && <NavLink to="/register">Sign Up</NavLink>}
        {!isLoggedIn && <NavLink to="/login">Sign In</NavLink>}
      </nav>
      {isLoggedIn && <NavLink to="/logout">LogOut</NavLink>}
    </header>
  );
};
