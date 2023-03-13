import { Route, Routes } from 'react-router-dom';
import { Login } from 'components/Auth';
import { Home } from 'components';
import { PrivateRoute } from 'utils/router';

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
