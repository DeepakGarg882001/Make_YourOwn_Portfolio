import React, { useEffect, useState } from "react";
import "../Styles/about.css";
import userIcon from "../images/user.png";
import mail from "../images/email.png";
import linkedin from "../images/linkedin.png";
import insta from "../images/insta.png";
import github from "../images/github.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


const TabPanel = (props) => {

  const {children , value ,index }=props;
 
  return (
    <div>
      {
        value===index &&(
          children
        )
      }
    </div>
  );
};



const About = () => {
  
  const [userData, setUserData]= useState({});

  const url = process.env.REACT_APP_URL;

  const navigate = useNavigate();

  const [vale, setValue] = useState(0);

  const handelTabs = (event, value) => {
    setValue(value);
  };


 const LoadUserData = async ()=>{
     try {
       
        const verifyUser = await fetch(`${url}/about`,{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
        });
        console.log(verifyUser);

        if(verifyUser.status===401){
            navigate("/login");
         }else{

          const data = await verifyUser.json();

          if(!data){
            swal("Oops !", "seems like Something went wrong","warning")
          }

           setUserData(data);
           console.log(userData);
         }
        
     } catch (error) {
       console.log(error);
       navigate("/login");
     }

 };

useEffect(()=>{
  
   LoadUserData();

},[]);

  return (
    <>
      <div className="about-canvas">
        <div className="about-paper">
          <div className="canvas-left">
            <div className="user-sec">
              <div className="user-img">
                <img src={userIcon}  alt="some issue"/>
              </div>
              <h1 className="user-name"> User Name </h1>
            </div>
            <div className="user-basics">
              <hr className="hr-line" />
              <p className="user-status">
                Hi, this is your status , please check it and update it with the
                duration of time
              </p>
              <hr className="hr-line" />
            </div>
            <div className="user-social-ids">
                <img src={mail} className="social-icon"  alt="some issue"/>
                <img src={linkedin} className="social-icon"  alt="some issue"/>
                <img src={insta} className="social-icon" alt="some issue" />
                <img
                  src={github} alt="some issue"
                  className="social-icon"
                  style={{ backgroundColor: "black", borderRadius: "35px" }}
                />
            </div>
          </div>
          <div className="canvas-right">
            <Tabs
              className="tabs-header"
              value={vale}
              centered
              textColor="inherit"
              onChange={handelTabs}
            >
              <Tab label="Projects" />
              <Tab label="Intern" />
              <Tab label="Skills" />
            </Tabs>

            <TabPanel value={vale} index={0}>
              <h1>this is the TabPanel {vale + 1}</h1>
            </TabPanel>
            <TabPanel value={vale} index={1} >
              <h1>this is the TabPanel {vale + 1}</h1>
            </TabPanel>
            <TabPanel value={vale} index={2}>
              <h1>this is the TabPanel {vale + 1}</h1>
            </TabPanel>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
