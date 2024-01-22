import Register from 'pages/register';
import { Link, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};

//https://back-power-pulse.onrender.com
