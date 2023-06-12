import React from "react";

type Props = {};

function Login({}: Props) {
  return (
    <div className="container login">
      <h1>Login to continue</h1>
      <div className="login-panel">
        <label htmlFor="label-name">Username</label>
        <input type="text" name="login" id="label-name"></input>
        <label htmlFor="label-password">Password</label>
        <input type="password" name="password" id="label-password"></input>
        <button className="btn-primary">Login</button>
        <hr />
        <button className="btn-secondary">Continue with Google</button>
      </div>
    </div>
  );
}

export default Login;
