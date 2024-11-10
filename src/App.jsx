import Navbar from "./components/navbar/Navbar";
import SecondaryNavbar from "./components/navbar/SecondaryNavbar";
import "./index.css"

import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="font">
      <Navbar /> 
      <SecondaryNavbar />
      <Outlet></Outlet>
    <Footer></Footer>
    </div>
  );
}

export default App;
