import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import SecondaryNavbar from "./components/navbar/SecondaryNavbar";
import Error from "../Error";
import "./index.css"

function App() {
  return (
    <div className="font">
      <Router>
      <Navbar /> {/* Include Navbar here */}
      <SecondaryNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
