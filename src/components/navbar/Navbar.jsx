import React from "react";
import "./navbar.css";
import logo from "../../assets/LOGO.png";
import bell from "../../assets/Bell.png";
import heart from "../../assets/Heart.png";
import cart from "../../assets/ShoppingCartSimple.png";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="top-nav">
          <div className="details">
            <li>Home</li>
            <li>Courses</li>
            <li>About</li>
            <li>Contact</li>
            <li>Become an Instructor</li>
          </div>
          <div className="lang">
            <li>USD</li>
            <li>English</li>
          </div>
        </div>
      </nav>
      <nav>
        <div className="nav-two">
          <div className="logo-browes-search">
            <img src={logo} alt="" />
            <select name="" id="browes">
              <option value="">Browes</option>
            </select>
            <select name="" id="search">
              <option value="">What do you want learn...</option>
            </select>
          </div>
          <div className="user-list">
            <div className="fev-bel-cart">
              <img src={bell} alt="" />
              <img src={heart} alt="" />
              <img src={cart} alt="" />
            </div>

            <div className="auth">
              <button>Create Account</button>
              <button>Sign In</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
