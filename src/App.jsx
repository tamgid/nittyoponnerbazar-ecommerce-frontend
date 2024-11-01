<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import SecondaryNavbar from "./components/navbar/SecondaryNavbar";
>>>>>>> d842a5535b9267f08b147d978178655d102524af

function App() {
  return (
    <Router>
<<<<<<< HEAD
=======
      <Navbar /> {/* Include Navbar here */}
      <SecondaryNavbar />
>>>>>>> d842a5535b9267f08b147d978178655d102524af
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
