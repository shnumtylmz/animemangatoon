import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBackdropClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header>
        <img src={logo} alt="Logo" className="logo" />

        <nav>
          <a href="#">Featured</a>
          <a href="#">What to Watch</a>
          <a href="#">Latest News and Reviews</a>
        </nav>

        <GiHamburgerMenu className="hamburger" onClick={handleMenuToggle} />

        {isMenuOpen && <div className="backdrop" onClick={handleBackdropClick}></div>}

        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </header>
    </>
  );
};

export default Header;
