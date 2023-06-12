import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login } from "../services/auth.service";

type Props = {};

function Login({}: Props) {
  let navigate: NavigateFunction = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const initialValues: {
    username: string;
    password: string;
  } = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue: { username: string; password: string }) => {
    const { username, password } = formValue;
    console.log(username, password);

    setMessage("");
    setLoading(true);

    login(username, password).then(
      () => {
        navigate("/dashboard");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
  };

  return (
    <div className="container login">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        <Form>
          <div className="login-panel">
            <h1>Login to continue</h1>
            <label htmlFor="label-name">Username</label>
            <Field name="username" type="text" className="form-control" />
            <ErrorMessage
              name="username"
              component="div"
              className="alert alert-danger"
            />
            <label htmlFor="label-password">Password</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage
              name="password"
              component="div"
              className="alert alert-danger"
            />
            <button type="submit" className="btn-primary">
              Login
            </button>
            <div className="login-signup-separator ">
              <span className="text-in-separator">or</span>
            </div>
            <button type="button" className="btn-secondary">
              Continue with Google
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
