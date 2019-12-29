import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

import styles from "./styles.module.css";

const LoginForm = props => {
  return (
    <form className={styles.formContainer}>
      <TextField />
      <TextField />
    </form>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
