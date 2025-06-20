import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
            <Link to="/" style={{ margin: '0 1rem', color: 'white' }}>Home</Link>
            <Link to="/about" style={{ margin: '0 1rem', color: 'white' }}>About</Link>
            <Link to="/contact" style={{ margin: '0 1rem', color: 'white' }}>Contact</Link>
        </nav>
    )
}

export default Navbar;