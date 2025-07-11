import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom';
import About from "./pages/About";
import Packages from "./components/Packages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/projects" element={<Projects/>} />
    </Routes>
    <Footer/>
    </>
    
  );
}

export default App;
