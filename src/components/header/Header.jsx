import { BeachAccess } from "@mui/icons-material";
import React from "react";
import "./header.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="headerContainer"></div>
      <div className="headerWrapper">
        <div className="headerLeft">
          <BeachAccess className="headerLogo" />
          <span className="headerTitle">Beach Camping System</span>
        </div>
        <div className="headerRight">
          <div className="headerMenu">
            <Link
              activeClass="active"
              to="landing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <NavLink to="/" style={{ textDecoration: 'inherit', color:'inherit'}}>
                <span className="headerMenuItem">Home</span>
              </NavLink>
            </Link>

            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="headerMenuItem">About</span>
            </Link>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="headerMenuItem">Services</span>
            </Link>

            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="headerMenuItem">Gallery</span>
            </Link>

            <Link
              activeClass="active"
              to="packages"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {" "}
              <span className="headerMenuItem">Packages</span>
            </Link>

            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="headerMenuItem">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
