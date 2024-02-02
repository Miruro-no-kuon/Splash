import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Splash from "./pages/Splash";
import ScrollToTopButton from "./components/ScrollUp";
import NotFound from "./components/404"; // Import the 404 page component

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
      <ScrollToTop />
      <SpeedInsights />
      <Routes>
        <Route path="/" element={<Splash />} />
        {/* Add a Route for the 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

export default App;
