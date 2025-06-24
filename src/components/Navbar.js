import { Link } from 'react-router-dom';
import '../css/componentcss/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>MJM Consulting</h2>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/webservices">Web Services</Link>
                <Link to="/networking">Networking</Link>
                <Link to="/computerrepair">Computer Repair</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;