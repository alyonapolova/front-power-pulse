import { NavLink } from 'react-router-dom';
import { UserMenu } from './UserMenu';
import { useSelector } from 'react-redux';
export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
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
        <NavLink to="/register">Sign Up</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
