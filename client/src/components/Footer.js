import React from "react";
import "../Styles/footer.css";
import footerImg from "../images/for_Footer.png";
import insta from "../images/insta.png";
import github from "../images/github.png";
import mail from "../images/email.png";
import linkedin from "../images/linkedin.png"
const Footer = () => {
  return (
    <>
      <div className="footer_canvas">

        <div className="canvas-happy">
          <img src={footerImg}  alt="some issue"/>
        </div>
 
       <div className="footer-right-section">
        <div className="canvas-icons">
          <div className="footer-icon-style">
            <img src={insta}  alt="some issue" />
          </div>
          <div className="footer-icon-style">
            <img src={github}  alt="some issue"/>
          </div>
          <div className="footer-icon-style">
            <img src={mail}  alt="some issue"/>
          </div>
          <div className="footer-icon-style">
            <img src={linkedin}  alt="some issue"/>
          </div>
          </div>
        <h2 className="copyright" > copyright©2022 | created by i.eLife </h2>
      
        
        </div>
      
      </div>
    </>
  );
};

export default Footer;
