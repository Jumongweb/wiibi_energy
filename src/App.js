import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import WiibiHome from "./components/WiibiHome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import WiibiReserve from "./components/WiibiReserve";
import WiibiBusiness from './components/WiibiBusiness'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<WiibiHome/>} />
        <Route path="/packages2" element={<WiibiReserve/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages3" element={<WiibiBusiness/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
