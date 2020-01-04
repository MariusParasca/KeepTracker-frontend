import React, { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Cookies from 'js-cookie';

import styles from './styles.module.css';
import axiosAuthServer from 'shared/axios/authServer';
import { parseJwt } from 'shared/utils/security';
import validateEmail from 'shared/utils/validateEmail';

const updateTextField = (func) => ({ target: { value } }) => {
  func(value);
};

const handleOnClickLogin = async (email, password) => {
  try {
    const response = await axiosAuthServer.post('login', {
      email,
      password,
    });
    const accessTokenData = parseJwt(response.data.accessToken);
    const refreshTokenData = parseJwt(response.data.refreshToken);
    Cookies.set('accessToken', accessTokenData, { expires: accessTokenData.exp });
    Cookies.set('refreshToken', refreshTokenData);
    console.log('coockie', Cookies.get('accessToken'));
  } catch (err) {
    console.log('err', err);
  }
};

const handleIsEmailValid = (email, setIsEmailInvalid, setEmailHelperText) => {
  if (!validateEmail(email)) {
    setIsEmailInvalid(true);
    setEmailHelperText('Invalid email');
  } else {
    setIsEmailInvalid(false);
    setEmailHelperText('');
  }
};

const handleIsPasswordValid = (password, setIsPasswordInvalid, setPasswordHelperText) => {
  if (password) {
    setIsPasswordInvalid(false);
    setPasswordHelperText('');
  } else {
    setIsPasswordInvalid(true);
    setPasswordHelperText("Password can't bet empty");
  }
};

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState('');

  const onClickLogin = useCallback(() => {
    if (!isEmailInvalid && !isPasswordInvalid && password && email) {
      handleOnClickLogin(email, password);
    }
  }, [email, password, isEmailInvalid, isPasswordInvalid]);

  const isEmailValid = useCallback(() => {
    handleIsEmailValid(email, setIsEmailInvalid, setEmailHelperText);
  }, [email]);

  const isPasswordValid = useCallback(() => {
    handleIsPasswordValid(password, setIsPasswordInvalid, setPasswordHelperText);
  }, [password]);

  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.contentContainer}>
        <Typography align="center" variant="h5">
          Welcome
        </Typography>
        <form>
          <div className={styles.inputContainer}>
            <TextField
              type="email"
              value={email}
              onChange={updateTextField(setEmail)}
              onBlur={isEmailValid}
              variant="outlined"
              placeholder="Email"
              autoFocus
              error={isEmailInvalid}
              helperText={emailHelperText}
            />
          </div>
          <div className={styles.inputContainer}>
            <TextField
              type="password"
              value={password}
              onChange={updateTextField(setPassword)}
              onBlur={isPasswordValid}
              variant="outlined"
              placeholder="Password"
              error={isPasswordInvalid}
              helperText={passwordHelperText}
            />
          </div>
        </form>
        <div className={styles.buttonContainer}>
          <Button variant="contained" color="primary" onClick={onClickLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
