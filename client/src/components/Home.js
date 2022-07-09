import React from 'react'
import "../Styles/home.css";
import tableset from "../images/table.png";
import coder from "../images/coder.png"
const Home = () => {

  // const url = process.env.REACT_APP_URL;

  // useEffect(()=>{

  //   fetch(`${url}/getcookie`,{
  //     method:"GET",
  //     headers:{
  //       "Content-Type":"application/json"
  //     },
     
  //   })

  // },[]);
 

  return (
    <>
     <div className='home-canvas'>
      
      <div className='canvas-section'>
         <div className='table-img' >
           <img src={tableset}  alt="some issue"/>
          </div>  
          <div className='home-message-box'>
            <h1 className='message'> Want to make your own Portfolio Web ? To repersent your Self </h1>
            <div className='explanation'>
             <p  >But, don't have as much time to spend efforts on this ! </p>
             <p style={{fontSize:"2rem"}}> Don't Worry !</p>
             <p> We have a Solution for you :)</p>
             <p> Just join with Our FAMILY </p>
            </div>
           
          </div>
      </div>

      <div className='canvas-midl-sec'>
         <h3 > Welcome User</h3>
          <div className='title-box'>
            <h1 className='title'> We are The MERN Developers</h1>
          </div>
      </div>   

      <div className='canvas-section'> 
        <div className='home-message-box'>
            <h1 className='message'> Don't have as much Experience with Full-Stack Development ?</h1>
            <div className='explanation'>
             <p> But, Require your own Page ! </p>
             <p style={{fontSize:"2rem"}}> Don't Worry !</p>
             <p> You are at the Right Place </p>
             <p> Simply make you Register yourself :)</p>
             <p> Enjoy as a Part of this FAMILY </p>
            </div>
        </div>
        <div className='coder-img' >
           <img src={coder}  alt="some issue"/>
         </div>
      </div>

     </div>
      
    </>
  )
}

export default Home;