import React from "react";
import "./services.css";
import beachImage from "../../../static/images/bg.jpg";
function Services() {
  return (
    <div className="services">
      <div className="servicesContainer">
        <h1 className="servicesTitle">
          ALL THAT YOU SHOULD KNOW ABOUT REVDANDA BEACH CAMPING ALIBAUG
        </h1>
        <div className="servicesWrapper">
          <img className="servicesImage" src={beachImage} alt="Services" />
          <div className="servicesListWrapper">
            <ul className="servicesList">
              <li className="servicesListItem">
                Revdanda Beach Camping price - INR 1500 per person
              </li>
              <li className="servicesListItem">
                Toilet facility - Yes, common washrooms available
              </li>
              <li className="servicesListItem">
                Parking Facility - Yes, Available
              </li>
              <li className="servicesListItem">
                Allowed Age Group - No age restriction.
              </li>
              <li className="servicesListItem">
                Type of Tents - Alpine Tents with mattresses
              </li>
              <li className="servicesListItem">
                Tent Capacity - Couple & Triple sharing available
              </li>
              <li className="servicesListItem">Best Tents in Alibaug</li>
              <li className="servicesListItem">
                Advance Booking - Yes, it's compulsory
              </li>
              <li className="servicesListItem">
                Watersports - can be made available on demand
              </li>
              <li className="servicesListItem">
                Watersports - can be made available on demand
              </li>
              <li className="servicesListItem">
                Beach Camping Timings - 4:30 PM to 10:30 AM (Overnight)
              </li>
              <li className="servicesListItem">Private Beach Camping</li>
              <li className="servicesListItem">
                Revdanda Fort - 3 Km from the camp
              </li>
            </ul>
          </div>

          <div className="servicesListWrapper">
            <h3 className="servicesText">
              Nearest Attractions from Alibaug Camping site
            </h3>
            <ul className="servicesList">
              <li className="servicesListItem">Colaba Fort, Alibaug</li>
              <li className="servicesListItem">Kashid Beach Camping</li>
              <li className="servicesListItem">Murud Janjira Fort & Beach</li>
              <li className="servicesListItem">Korlai Fort</li>
              <li className="servicesListItem">Birla Temple</li>
              <li className="servicesListItem">Kolad River Rafting</li>
              <li className="servicesListItem">Phansad Wildlife Sanctuary</li>
              <li className="servicesListItem">Akshi Beach Camping</li>
              <li className="servicesListItem">Nagaon Beach Camping</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
