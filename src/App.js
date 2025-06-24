import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import WebServices from './pages/WebServices';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/webservices" element={<WebServices/>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
