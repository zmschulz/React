import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
    return (
        
        <Carousel data-bs-theme="dark">
            
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src="https://i.redd.it/s0cams5qw2101.jpg"
                    
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.redd.it/ocpckm6u4jn51.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.redd.it/dc4q1a7strf51.jpg"
                  
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
    );
}

export default CarouselHome;