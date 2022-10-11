import { HomePage } from 'pages/Home';
import { NotFoundPage } from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';

export const App = (): JSX.Element => (
  <Routes>
    <Route element={<HomePage />} path="/" />
    <Route element={<NotFoundPage />} path="*" />
  </Routes>
);