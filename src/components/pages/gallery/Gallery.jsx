import React from "react";
import "./gallery.css";
import img1 from '../../../static/gallery/1.jpg';
import img3 from '../../../static/gallery/3.jpg';
import img4 from '../../../static/gallery/4.jpg';
import img5 from '../../../static/gallery/5.jpg';
import img6 from '../../../static/gallery/6.jpg';
import img11 from '../../../static/gallery/11.jpg';
import img9 from '../../../static/gallery/9.jpg';
import img10 from '../../../static/gallery/10.jpg';
function Gallery() {
  return (
    <div className="gallery" id="gallery">
      <div className="galleryContainer">
        <h1 className="galleryTitle">Gallery</h1>
        <div className="galleryListWrapper">
          <ul className="galleryList clearfix">
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img1} alt="Image 1" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img5} alt="Image 5" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img3} alt="Image 3" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img4} alt="Image 4" />
              </figure>
            </li>
          </ul>
          <ul className="galleryList clearfix">
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img6} alt="Image 6" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img11} alt="Image 11" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img9} alt="Image 9" />
              </figure>
            </li>
            <li className="galleryListItem">
              <figure className="galleryImage">
                <img src={img10} alt="Image 10" />
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
