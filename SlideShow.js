import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
    "codeRed.js",
    "img/IMG_20211105_122648.jpg",
    "img/IMG_20211105_122739.jpg",
    "img/IMG_20211105_122802.jpg",
    "img/IMG_20211105_123053.jpg",
    "img/IMG_20211105_122812.jpg",
    "img/IMG_20211105_124029.jpg",
    "img/IMG_20211105_122712.jpg",
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
