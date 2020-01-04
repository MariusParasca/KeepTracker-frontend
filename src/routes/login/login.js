import React from 'react';

import styles from './styles.module.css';
import LoginForm from 'components/loginForm/loginForm';

const Login = (props) => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default Login;
