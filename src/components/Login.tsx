import React from "react";

type Props = {};

function Login({}: Props) {
  return (
    <div className="container login">
      <div className="login-panel">
        <h1>Login to continue</h1>
        <label htmlFor="label-name">Username</label>
        <input type="text" name="login" id="label-name"></input>
        <label htmlFor="label-password">Password</label>
        <input type="password" name="password" id="label-password"></input>
        <button className="btn-primary">Login</button>
        <div className="login-signup-separator ">
          <span className="text-in-separator">or</span>
        </div>
        <button className="btn-secondary">Continue with Google</button>
      </div>
    </div>
  );
}

export default Login;
