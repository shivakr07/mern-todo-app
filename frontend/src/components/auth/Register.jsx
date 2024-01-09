import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

import classes from './AuthForm.module.scss';

function Register() {
  const register = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      await axios.post('/api/auth/register', user);
      toast.success('Registered successfully');
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className={classes.register}>
      <h1 className={classes.title}>Register</h1>
      <form className={classes.authForm} onSubmit={register}>
        <label htmlFor="name">
          Full Name:
          <input name="name" type="text" placeholder="enter your full name ..." required />
        </label>
        <label htmlFor="email">
          email:
          <input name="email" type="email" placeholder="enter your email" required />
        </label>
        <br />
        <label htmlFor="password">
          password:
          <input
            name="password"
            type="password"
            placeholder="enter your password"
            required
          />
        </label>
        <br />
        <button type="submit" className='reg'>Register</button>
      </form>
    </div>
  );
}

export default Register;
