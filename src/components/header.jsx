import Logo from "../assets/logo.png";
import "../styles/header.css";

export const Header = () => {
  return (
    <header>
      <img alt="logo-png" src={Logo} className="logo-image" />
      <section className="title-section">
        <h1>TechInnovate 2025 </h1>
      </section>
    </header>
  );
};
