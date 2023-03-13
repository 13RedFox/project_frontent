import { Button, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import style from './Login.module.scss';

export const Login: FC = () => {
  return (
    <>
      <Typography
        variant='h2'
        sx={{ fontFamily: 'Popins', marginBottom: 3 }}
      >
        Login
      </Typography>
      <TextField
        label='Email'
        variant='outlined'
        placeholder='Введите ваш email'
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        type='password'
        label='Password'
        variant='outlined'
        placeholder='Введите ваш пароль'
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button
        variant='contained'
        sx={{ fontFamily: 'Popins', marginBottom: 2, width: '30%' }}
      >
        sign in
      </Button>
      <Typography
        variant='body1'
        sx={{ fontFamily: 'Popins' }}
      >
        Don't have an account?
        <span className={style.link}>Sign up</span>
      </Typography>
    </>
  );
};
