import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Slideshow from "./SlideShow";
import codeRedImg from "./img/codeRed.jpg"

class App extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 5000,
      autoplay: false,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
      indicators: (i) => <div className="indicator">{i + 1}</div>
    };
    const slideImages1 = [
      "img/IMG_20211105_122648.jpg",
      "img/IMG_20211105_122739.jpg",
      "img/IMG_20211105_122802.jpg",
      "img/IMG_20211105_123053.jpg",
      "img/IMG_20211105_122812.jpg",
      "img/IMG_20211105_124029.jpg",
      "img/IMG_20211105_122712.jpg",
    ];
    const slideImages = [
      {
        url: "./img/IMG_20211105_122648.jpg",
        caption: 'Slide 1'
      },
      {
        url: 'images/slide_3.jpg',
        caption: 'Slide 2'
      },
      {
        url: 'images/slide_4.jpg',
        caption: 'Slide 3'
      },
    ];

    return (
      <div className="App">
        <h3>Slide Effect</h3>
        <div className="slide-container">
        <img src={require('./img/IMG_20211105_122648.jpg')}/>
      </div>
      </div>
    );
  }
  
}

export default App;
