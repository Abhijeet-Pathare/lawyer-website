import "../css/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p><strong>Phone:</strong> +91 9XXXXXXXXX</p>
      <p><strong>Email:</strong> advocate@example.com</p>
      <p><strong>Office:</strong> Pune District Court परिसर</p>

      <a
        href="https://wa.me/919XXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="contact-btn"
      >
        WhatsApp Consultation
      </a>
    </section>
  );
}

export default Contact;
