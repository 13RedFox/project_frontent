import { Route, Routes } from 'react-router-dom';
import { Home } from './components';
import { Login } from './components/Auth/Login';
import { PrivateRoute } from './utils/router';

export const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route
            path='/'
            element={<Home />}
          />
        </Route>
        <Route
          path='login'
          element={<Login />}
        />
      </Routes>
    </div>
  );
};
