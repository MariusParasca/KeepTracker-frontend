import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";
import LoginForm from "../../components/loginForm";

const Login = props => {
  return (
    <div className={styles.container}>
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
