import React from "react";

type Props = {};

function Login({}: Props) {
  return (
    <div className="container login">
      <h1>Login to continue</h1>
      <div className="login-panel">
        <input name="login"></input>
        <input name="password"></input>
        <button>Login</button>
        <hr />
        <button>Login with Google</button>
      </div>
    </div>
  );
}

export default Login;
