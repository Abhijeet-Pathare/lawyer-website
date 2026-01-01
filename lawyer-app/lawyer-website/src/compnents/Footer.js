import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        Disclaimer: As per Bar Council of India rules, this website is not intended
        for advertising or solicitation.
      </p>
      <p>© {new Date().getFullYear()} Adv. Prasad Pathare</p>
    </footer>
  );
}

export default Footer;
