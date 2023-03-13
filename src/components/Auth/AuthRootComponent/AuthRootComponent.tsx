import { Box } from '@mui/material';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Login } from '../Login';
import { Register } from '../Register';
import styles from './AuthRootComponent.module.scss';

export const AuthRootComponent: FC = () => {
  const location = useLocation();

  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          margin='auto'
          padding={4}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
        >
          {location.pathname === '/login' ? (
            <Login />
          ) : location.pathname === '/register' ? (
            <Register />
          ) : null}
        </Box>
      </div>
    </div>
  );

  // return
};
