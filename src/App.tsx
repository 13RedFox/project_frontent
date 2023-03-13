import { Home } from 'components';
import { AuthRootComponent } from 'components/Auth';
import { Route, Routes } from 'react-router-dom';
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
          element={<AuthRootComponent />}
        />
        <Route
          path='register'
          element={<AuthRootComponent />}
        />
      </Routes>
    </div>
  );
};
