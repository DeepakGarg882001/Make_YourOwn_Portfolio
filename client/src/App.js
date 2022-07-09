import {Route,Routes} from "react-router-dom"
import Contact from "./components/Contact";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <>
     <Navbar/>

     <Routes>
      <Route path='/'        element={<Home />}    />
      <Route path='/about'   element={<About />}   />
      <Route path='/contact' element={<Contact />} />
      <Route path='/signup'  element={<SignUp />}  />
      <Route path='/login'  element={<Login />}  />
      <Route path="*" element={<PageNotFound />}/>
     </Routes>

     <Footer />
    </>
  );
}

export default App;
