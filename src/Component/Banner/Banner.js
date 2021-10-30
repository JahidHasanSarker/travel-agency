import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-size"
                        src="http://themesvila.com/html-templates/turista/assets/img/slider/3.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Wonderful Mountain</h3>
                        <p>We believe that only an experienced travel expert can help you discover its unique and amazing qualities. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-size"
                        src="http://themesvila.com/html-templates/turista/assets/img/slider/1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Breath Of The Wild</h3>
                        <p>We believe that only an experienced travel expert can help you discover its unique and amazing qualities. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-size"
                        src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/summertime-background-img-3.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Beautiful Maldives</h3>
                        <p>We believe that only an experienced travel expert can help you discover its unique and amazing qualities. </p>
                    </Carousel.Caption>
                </Carousel.Item>
  
            </Carousel>
        </div>
    );
};

export default Banner;