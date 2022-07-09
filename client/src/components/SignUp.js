import React from "react";
import sideImg from "../images/register.png";
import "../Styles/signup.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const SignUp = () => {
  
  const navigate = useNavigate();
  const url = process.env.REACT_APP_URL;

  const userData = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    confirmPassword: "",
  };

  const validation = yup.object().shape({
    fname: yup.string().min(3, "Incorrect").required("Please Enter Your Name"),
    lname: yup.string().required("Please Enter full Name"),
    work: yup.string().required("This is required"),
    email: yup.string().email("Invalid email").required("Email is required !"),
    phone: yup.number("enter only numbers").required("Phone No. required !"),
    password: yup.string().required("password is required"),
    confirmPassword: yup
      .string("Confirm your Password")
      .oneOf([yup.ref("password")], "Password does not match"),
  });

  const postData = async (values) => {
    const { fname, lname, work, email, phone, password } = values;

    const makeReq = await fetch(`${url}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname: fname,
        lname: lname,
        work: work,
        email: email,
        phone: phone,
        password: password,
      }),
    });

    const data = await makeReq.json();

    if (data.error) {
      swal("Sorry !", `${data.error}`, "error");
    }
    if (data.message) {
      swal("Congratulation's", `${data.message}`, "success");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="canvas">
        <div className="canvas-paper">
          <div className="form-container">
            <Formik
              initialValues={userData}
              validationSchema={validation}
              onSubmit={(values) => {
                postData(values);
              }}
            >
              <Form className="form">
                <Field
                  as={TextField}
                  variant="standard"
                  label="First name"
                  placeholder="Joe"
                  name="fname"
                  type="text"
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="fname" />
                </p>

                <Field
                  as={TextField}
                  variant="standard"
                  label="Last name"
                  placeholder="Hann"
                  name="lname"
                  type="text"
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="lname" />
                </p>

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
                  label="Work"
                  placeholder="student"
                  name="work"
                  type="text"
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="work" />
                </p>

                <Field
                  as={TextField}
                  variant="standard"
                  label="Contact No."
                  placeholder="9898989898"
                  name="phone"
                  type="number"
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="phone" />
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

                <Field
                  as={TextField}
                  variant="standard"
                  label="Confirm Password"
                  placeholder="re-type password"
                  name="confirmPassword"
                  type="text"
                />
                <p style={{ color: "red" }}>
                  <ErrorMessage name="confirmPassword" />
                </p>
                <button type="submit" className="btn">
                  <h2>Submit</h2>
                </button>
              </Form>
            </Formik>
          </div>
          <div>
            <img src={sideImg} className="w-full h-full" alt="some issue" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
