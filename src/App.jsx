import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import SecondaryNavbar from "./components/navbar/SecondaryNavbar";
import Error from "../Error";
import "./index.css"
import UserProfile from "./pages/UserProfile/UserProfile";
import Footer from "./components/footer/Footer";
import UpdateProfile from "./pages/UserProfile/UpdateProfile";

function App() {
  return (
    <div className="font">
      <Router>
      <Navbar /> {/* Include Navbar here */}
      <SecondaryNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="/my-profile" element={<UserProfile />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
