import React from "react";
import classes from "./login.module.css";
import Image from "next/image";
import LoginForm from "../../components/loginForm/LoginForm";
const Login = () => {
  return (
    <div className={classes["login"]}>
      <div className={classes["login-top"]}>
        <div className={classes["logo-wrapper"]}>
          <Image alt="logo" src="/svg/logo-login.svg" width="59" height="38" />
        </div>
        <h1 className={classes["title"]}>Log In</h1>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
