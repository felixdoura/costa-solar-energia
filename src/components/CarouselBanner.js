import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CarouselBanner.css'
import { Link } from 'react-router-dom';


function CarouselBanner() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <div className='App'>
                <Carousel responsive={responsive}>
                    <div className='card'>
                        <Link to="/products">
                            <img src='images/termotanques-001.jpg' alt='carousel-pic' className='product--image' />
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to="/products">
                            <img src='images/fotovoltaicos-001.jpg' alt='carousel-pic' className='product--image' />
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to="/products">
                            <img src='images/instalacion-002.jpg' alt='carousel-pic' className='product--image' />
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to="/products">
                            <img src='images/climatizadores-001.jpg' alt='carousel-pic' className='product--image' />
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to="/products">
                            <img src='images/termotanques-001.jpg' alt='carousel-pic' className='product--image' />
                        </Link>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default CarouselBanner