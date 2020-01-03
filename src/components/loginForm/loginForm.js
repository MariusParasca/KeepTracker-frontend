import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import styles from "./styles.module.css";

const LoginForm = props => {
  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.contentContainer}>
        <Typography align="center" variant="h5">
          Login
        </Typography>
        <form>
          <div className={styles.inputContainer}>
            <TextField
              variant="outlined"
              placeholder="Email"
              autoFocus={true}
            />
          </div>
          <div className={styles.inputContainer}>
            <TextField variant="outlined" placeholder="Password" />
          </div>
        </form>
        <div className={styles.buttonContainer}>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
