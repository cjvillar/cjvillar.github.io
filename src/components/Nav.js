import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaReact } from "react-icons/fa";
import { BiLogoFlask, BiLogoDjango } from "react-icons/bi";
import cv from "../images/name_logo.svg";
import { Link } from "react-scroll";

const Navigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="nav-header">
      <nav className="navbar">
        <img src={cv} width={400} height={400} alt="cv logo img" />
        <div className="hamburger" onClick={handleClick}>
          <FaBars
            className={` md lg:hidden ${click ? "hidden" : ""}`}
            size={30}
          />
          <FaTimes
            className={`md lg:hidden ${click ? "" : "hidden"}`}
            size={30}
          />
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="react"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                React/Next.js
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="django"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Django
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="flask"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Flask
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;