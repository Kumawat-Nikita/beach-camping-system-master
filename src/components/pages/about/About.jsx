import React from "react";
import "./about.css";
import beach from "../../../static/images/bg.jpg";

function About() {
  return (
    <div className="about" id="about">
      <div className="aboutContainer">
        <h1 className="aboutTitle">About Beach Camping System</h1>
        <img src={beach} alt="Beach Camping" className="aboutImage" />
        <div className="aboutWrapper">
          <p className="aboutText">
            Beach Camping or camping per se hasn’t been popular with Indians.
            But times are changes for better or worse, we say for the Best! We
            are excited to bring you Beach camping experience very closer to
            your city. Our campsite is located at Revdanda beach. This campsite
            is located at 17 km from Alibaug, 100 km from Mumbai and 150 km from
            Pune. Revdanda Beach Camping is one of the best experiences for
            people looking to have some relaxing and fun weekend with friends
          </p>
          <p className="aboutText">
            Beach camping is a new phenomenon, fast catching up amongst the
            youth where one can experience camping on the beach and spend a
            great time with friends and family. And our campsite in Revdanda
            offers so much more than a great time. You can have the best
            memories and great fun. You can indulge in activities such as Beach
            volleyball, cricket, and badminton or simply dive on the beach. Our
            staff at the campsite will help you with the campfire and barbeque
            to make your night even more special.
          </p>
          <p className="aboutText">
            Our campsite is managed by a camp manager along with 7 – 8 cooking
            and cleaning staffs looking after the property. It can accommodate
            up to 50 people. But if you are more, then it is merrier. The food
            prepared at the campsite by our cooking staff who are from the local
            villages, they make sure to maintain the hygiene standard. It is
            limited to the availability of local veggies and meat. If you have
            any restrictions or requests, there is a need for prior intimation
            for the same. Hygiene is very important at Revdanda beach camping.
            We have 5 washrooms and Toilets well maintained; we make sure there
            is hygiene maintenance.
          </p>
          <p className="aboutText">
            We at Revdanda beach camping are looking forward to giving you the
            best weekend experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
