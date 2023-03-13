import { Button, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import style from './Register.module.scss';

export const Register: FC = () => {
  return (
    <>
      <Typography
        variant='h2'
        fontFamily='Popins'
        sx={{ fontFamily: 'Popins', marginBottom: 2 }}
      >
        Registration
      </Typography>
      <TextField
        label='Name'
        variant='outlined'
        placeholder='Enter your name'
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label='Email'
        variant='outlined'
        placeholder='Enter your email'
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        type='password'
        label='Password'
        variant='outlined'
        placeholder='Enter your password'
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        type='password'
        label='Password'
        variant='outlined'
        placeholder='Repeat your password'
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button
        variant='contained'
        sx={{ fontFamily: 'Popins', marginBottom: 1, width: '40%' }}
      >
        Sign Up
      </Button>
      <Typography
        variant='body1'
        sx={{ fontFamily: 'Popins' }}
      >
        Do you have an account?
        <span className={style.link}>Sign in</span>
      </Typography>
    </>
  );
};
