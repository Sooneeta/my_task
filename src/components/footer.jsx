import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <section className="contact-section">
        <div className="contact">
          <MdEmail />
          <span>info@techinnovate2025.com </span>
        </div>
        <div className="contact">
          <FaPhone />
          <span>+1 (415) 555-1234 </span>
        </div>
      </section>
      <section className="social-links-secti0n">
        <div className="social-links">
          <FaXTwitter />
          <FaLinkedin />

          <FaFacebook />
        </div>
      </section>
    </div>
  );
};
