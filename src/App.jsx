import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Splash from "./pages/Splash";
import Info from "./components/Info";

function App() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && document.activeElement) {
        document.activeElement.blur();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Add a Route "Splash" for any other route*/}
        <Route path="/" element={<Splash />} />
        <Route path="*" element={<Splash />} />
        <Route path="Info" element={<Info />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
