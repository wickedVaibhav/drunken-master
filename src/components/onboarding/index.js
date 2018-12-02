import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Button from '@material-ui/core/Button';
import './style.css';
export default class OnBoarding extends Component {
  render() {
    return (
        <Carousel showArrows={false} showThumbs={false} showIndicators={false} showStatus={false} className="carousel-wrapper">
          <div>
            <img src="https://img.freepik.com/free-vector/lovely-welcome-composition-with-flat-design_23-2147920507.jpg?size=338&ext=jpg"></img>
          </div>
          <div>
            <img src="https://img.freepik.com/free-vector/lovely-welcome-composition-with-flat-design_23-2147920507.jpg?size=338&ext=jpg"></img>
            </div>
          <div>
            <img src="https://img.freepik.com/free-vector/lovely-welcome-composition-with-flat-design_23-2147920507.jpg?size=338&ext=jpg"></img>
            <Button variant="outlined" color="primary">
              Next
            </Button>
          </div>
        </Carousel>
    )
  }
}
