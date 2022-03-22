import React from "react";
import "./landing.css";
import { Link } from "react-scroll";

function Landing() {
  return (
    <div className="landing" id="landing">
      <div className="landingContainer">
        <div className="landingBody">
          <h1 className="landingText">Alibag Beach Camping</h1>
          <h3 className="landingDescription">
            Sky above, Sea Below <br />
            Peace Within
          </h3>
          <Link
            activeClass="active"
            to="packages"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="landingButton">Packages</button>
          </Link>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {" "}
            <button className="landingButton">Services</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
