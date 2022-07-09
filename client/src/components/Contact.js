import React, { useEffect } from "react";
import "../Styles/contact.css";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import swal from "sweetalert";

const Contact = () => {
  
  const url = process.env.REACT_APP_URL;

  const contactMessage = {
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    clientMessage: "",
  };

  const validation = yup.object().shape({
    clientMessage: yup.string().required(" Message is required !"),
    clientName: yup.string().min(3, " Incorrect").required(" Name is required !"),
    clientEmail: yup
      .string()
      .email(" Invalid email")
      .required(" Email is required !"),
    clientPhone: yup.number().required(" Phone No. required !"),
  });

  const removeBorder = {
    "& .MuiOutlinedInput-root": {
      "& > fieldset": {
        border: "none",
      },
    },
  };

  const handelMessage = async (values)=>{
    
    const {clientName, clientEmail ,clientPhone ,clientMessage }= values;

    const doReq =  await fetch(`${url}/message`,{
         method:"POST",
         headers:{
          "Content-Type":"application/json"
         },
         body:JSON.stringify({
          clientName, clientEmail ,clientPhone ,clientMessage
         })
    });
           
    console.log(doReq);
    const reply = await doReq.json();
    console.log(reply);
    if(doReq.status===201){
      swal("Hurry !",`${reply.message}`,"success");
    }else{
      swal(" Soory !",`${reply.error}`,"error");
    }
  }



  return (
    <>
      <div className="contact-canvas">
        <div className="info-box">
          <CallIcon className="icon-style" />
          <div>
            <h2 className="title-style"> Phone </h2>
            <p> (+91) 8901573639 </p>
          </div>
        </div>

        <div className="info-box">
          <EmailIcon className="icon-style" />
          <div>
            <h2 className="title-style"> Email </h2>
            <p> garg882001@gmail.com </p>
          </div>
        </div>

        <div className="info-box">
          <FmdGoodIcon className="icon-style" />
          <div>
            <h2 className="title-style"> Address </h2>
            <p> Central University of Haryana </p>
          </div>
        </div>

        <Formik 
           initialValues={contactMessage} 
           validationSchema={validation} 
           onSubmit={(values,{resetForm})=>{
             handelMessage(values);
             resetForm();
           }} 
           >
          <Form className="message-box">
            <h2 className="title-style" style={{ marginLeft: "30px" }}>
              Get in Touch
            </h2>

            <div className="inside-message-box">
              <div>
                <Field
                  as={TextField}
                  placeholder="Your Name"
                  className="input-feild"
                  sx={removeBorder}
                  name="clientName"
                  type="text"
                />
                <p>
                  <ErrorMessage name="clientName" />
                </p>
              </div>

              <div>
                <Field
                  as={TextField}
                  placeholder="Your Email"
                  className="input-feild"
                  sx={removeBorder}
                  name="clientEmail"
                  type="email"
                />
                <p>
                  <ErrorMessage name="clientEmail" />
                </p>
              </div>

              <div>
                <Field
                  as={TextField}
                  placeholder="Contact Number"
                  className="input-feild"
                  sx={removeBorder}
                  name="clientPhone"
                  type="number"
                />
                <p>
                  <ErrorMessage name="clientPhone" />
                </p>
              </div>

              <div className="box">
                <Field
                  as={TextField}
                  placeholder="Enter Your Message"
                  className="message-feild"
                  sx={removeBorder}
                  multiline
                  maxRows={6}
                  name="clientMessage"
                  type="text"
                />
                <p>
                  <ErrorMessage name="clientMessage" />
                </p>
              </div>
            </div>
            <button className="title-style" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Contact;
