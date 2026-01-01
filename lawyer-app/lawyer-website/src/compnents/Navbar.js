import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Adv. Prasad Pathare</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#practice">Practice Areas</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
