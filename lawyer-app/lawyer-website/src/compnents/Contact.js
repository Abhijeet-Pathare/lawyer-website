import "../css/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p><strong>Phone:</strong> +91 8007888250</p>
      <p><strong>Email:</strong> advprasadpathare@gmail.com</p>
      <p><strong>Office:</strong> Office No. 1, Shalini Heights, Shirole Galli, Shivajinagar Gavthan, Pune 411005</p>

      <a
        href="https://wa.me/message/YMAT2PDWS7Y2G1"
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
