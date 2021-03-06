import React from "react";
import "./homePage.css";
import Landing from "../landing/Landing";
import About from "../about/About";
import Services from "../services/Services";
import Gallery from "./../gallery/Gallery";
import Packages from "../packages/Packages";
import SignIn from "../../signin/SignIn";
import SignUp from "../../signup/Signup";
import Contact from "./../contact/Contact"

function homePage() {
  return (
    <div className="homePage">
      <Landing />
      <About />
      <Services />
      <Gallery />
      <Packages />
      <Contact />
    </div>
  );
}

export default homePage;
