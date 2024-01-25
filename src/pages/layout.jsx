import { AppBar } from 'components/auth/AppBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
}
