import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Qoute from "./pages/Qoute";
import MoveUp from "./components/MoveUp";
import Loader from "./pages/Loader";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // 🧠 Show loader for 1s whenever route changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 10);
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) return <Loader />;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/servies" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-qoute" element={<Qoute />} />
      </Routes>

      <MoveUp />
    </>
  );
}

export default App;
