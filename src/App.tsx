import { Route, Routes } from 'react-router-dom';
import { Home } from './components';
import { Login } from './components/Auth/Login';

export const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='login'
          element={<Login />}
        />
      </Routes>
    </div>
  );
};
