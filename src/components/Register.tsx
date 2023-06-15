import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { register } from "../services/auth.service";

type Props = {};

const Register = (props: Props) => {
  let navigate: NavigateFunction = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const initialValues: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  } = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    email: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
    confirmPassword: Yup.string().required("This field is required!"),
  });

  const handleRegister = (formValue: {
    username: string;
    email: string;
    password: string;
  }) => {
    const { username, email, password } = formValue;

    setMessage("");
    setLoading(true);

    register(username, password, email).then(
      () => {
        navigate("/dashboard");
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
        onSubmit={handleRegister}
      >
        <Form>
          <div className="login-panel">
            <h1>Registration Form</h1>
            <div className="form-group">
              <label htmlFor="label-name">Username</label>
              <Field name="username" type="text" className="form-control" />
              <ErrorMessage
                name="username"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="label-email">Email</label>
              <Field name="email" type="text" className="form-control" />
              <ErrorMessage
                name="email"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="label-password">Password</label>
              <Field name="password" type="password" className="form-control" />
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="label-confirm-password">Confirm password</label>
              <Field
                name="confirm-password"
                type="password"
                className="form-control"
              />
              <ErrorMessage
                name="confirm-password"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <br />
            <button type="submit" className="btn-primary">
              Register
            </button>
          </div>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger error" role="alert">
                {message}
              </div>
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
