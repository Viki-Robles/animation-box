import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slides.css';
 
export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <Slider {...settings} className='slider'>
          <div className='slider-item-box'>
              <h4>We have seen amazing results already. 
                  It really saves me time and effort. HelloHub is exactly what our business has been lacking.
                  Thanks guys, keep up the good work</h4>
              <h6>Ambrose</h6>
        </div>
        <div className='slider-item-box'>
              <h4>We have seen amazing results already. 
                  It really saves me time and effort. HelloHub is exactly what our business has been lacking.
                  Thanks guys, keep up the good work</h4>
              <h6>Ambrose</h6>
        </div>
        <div className='slider-item-box'>
              <h4>We have seen amazing results already. 
                  It really saves me time and effort. HelloHub is exactly what our business has been lacking.
                  Thanks guys, keep up the good work</h4>
              <h6>Ambrose</h6>
        </div>
        <div className='slider-item-box'>
              <h4>We have seen amazing results already. 
                  It really saves me time and effort. HelloHub is exactly what our business has been lacking.
                  Thanks guys, keep up the good work</h4>
              <h6>Ambrose</h6>
        </div>
        <div className='slider-item-box'>
              <h4>We have seen amazing results already. 
                  It really saves me time and effort. HelloHub is exactly what our business has been lacking.
                  Thanks guys, keep up the good work</h4>
              <h6>Ambrose</h6>
        </div>
        <div className='slider-item-box'>
              <h4>We have seen amazing results already. 
                  It really saves me time and effort. HelloHub is exactly what our business has been lacking.
                  Thanks guys, keep up the good work</h4>
              <h6>Ambrose</h6>
        </div>
      </Slider>
    );
  }
}