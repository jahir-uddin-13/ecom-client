import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/pexels-andre-mouton-1207875.jpg';
import image2 from '../../images/pexels-george-lebada-567540.jpg';
import image3 from '../../images/pexels-pixabay-247399.jpg';


const Slide = () => {
    return (
        <div>
            <div className="carousel mt-5">
                <Carousel>
                    <Carousel.Item>
                        <img style={{maxHeight:'800px'}}
                            className="d-block w-100 img-fluid"
                            src={image1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{maxHeight:'800px'}}
                            className="d-block w-100 img-fluid"
                            src={image2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{maxHeight:'800px'}}
                            className="d-block w-100 img-fluid"
                            src={image3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Slide;