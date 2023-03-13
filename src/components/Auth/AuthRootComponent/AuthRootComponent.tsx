import { Box } from '@mui/material';
import { FC, FormEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Login } from '../Login';
import { Register } from '../Register';
import styles from './AuthRootComponent.module.scss';

export const AuthRootComponent: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const location = useLocation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    console.log(email);
  };

  return (
    <div className={styles.root}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
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
            <Login
              setEmail={setEmail}
              setPassword={setPassword}
            />
          ) : location.pathname === '/register' ? (
            <Register />
          ) : null}
        </Box>
      </form>
    </div>
  );

  // return
};
