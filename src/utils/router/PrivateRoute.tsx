import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute: FC = () => {
  const auth = true;

  return auth ? <Outlet /> : <Navigate to='login' />;
};
