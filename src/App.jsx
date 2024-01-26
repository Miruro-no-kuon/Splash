import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Splash from "./pages/Splash";

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
      <SpeedInsights />
      <Routes>
        <Route path="/" element={<Splash />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
