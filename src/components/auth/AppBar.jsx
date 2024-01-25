import { NavLink } from 'react-router-dom';

export const AppBar = () => {
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
        <NavLink to="/register">Sign Up</NavLink>
      </nav>
    </header>
  );
};
