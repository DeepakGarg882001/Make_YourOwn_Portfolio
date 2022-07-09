import React from 'react';
import Page404 from "../images/404.png";
import "../Styles/pageNotFound.css";

const PageNotFound = () => {
  return (
   <>
     <div className='canvas-404'>
        <div className='canvas-404-img'>
           <img src={Page404} alt="some issue"/>
         </div>
     </div>
   </>
  )
}

export default PageNotFound;