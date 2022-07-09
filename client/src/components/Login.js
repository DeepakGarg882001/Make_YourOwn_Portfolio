import React from "react";
import "../Styles/login.css";
import loginImg from "../images/loginTheme.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";


const Login = () => {
  
  const url = process.env.REACT_APP_URL;
  const navigate = useNavigate();
  
  const cookie = new Cookies();

  const userloginData = {
    email: "",
    password: "",
  };

  const validation = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required !"),
    password: yup.string().required("password is required"),
  });

  const verifyUser = async (values) => {
    const { email, password } = values;

    const makeRequest = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const response = await makeRequest.json();

    if (response.error) {
      swal("Sorry", `${response.error}`, "error");

    }
    if (response.message1) {
      swal("Welcome Back ", `${response.userName}`, "success");
      cookie.set("myToken",`${response.token}`);
      navigate("/");
    }
  };

  return (
    <>
      <div className="login-canvas">
        <div className="login-paper">
          <div className="login-form-container">
            <Formik
              initialValues={userloginData}
              validationSchema={validation}
              onSubmit={(values) => {
                verifyUser(values);
              }}
            >
              <Form className="form">
                <Field
                  as={TextField}
                  variant="standard"
                  label="Email"
                  placeholder="xyz@email.com"
                  name="email"
                  type="email"
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="email" />
                </p>

                <Field
                  as={TextField}
                  variant="standard"
                  label="Password"
                  placeholder="######"
                  name="password"
                  type="password"
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="password" />
                </p>

                <button type="submit" className="btn">
                  <h2>Login</h2>
                </button>
              </Form>
            </Formik>
          </div>
          <div className="canvas-image">
            <img src={loginImg} alt="some issue" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
