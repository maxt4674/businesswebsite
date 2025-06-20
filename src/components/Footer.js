import '../css/componentcss/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MJM Consulting. All rights reserved.</p>
    </footer>
  );
};

export default Footer;