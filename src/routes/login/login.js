import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";
import LoginForm from "../../components/loginForm/loginForm";

const Login = props => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

Login.propTypes = {};

export default Login;
