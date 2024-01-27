import HomePage from 'pages/HomePage';
import Layout from 'pages/Layout';
import LoginPage from 'pages/LoginPage';
import ProfileSettings from 'pages/ProfileSettings';
import RegisterPage from 'pages/RegisterPage';

import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/user" element={<ProfileSettings />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/diary" element={<DiaryPage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/products" element={<ProductsPage />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

//https://back-power-pulse.onrender.com
