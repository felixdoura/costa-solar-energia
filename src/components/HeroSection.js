import React, { useState } from 'react';
import '../App.css';
import './HeroSection.css';
import ContactCard from './ContactCard';

const slides = [
    {
        image: '/images/img-1.jpg',
        alt: 'banner-img',
    },
    {
        image: '/images/img-2.jpg',
        alt: 'banner-img',
    },
    {
        image: '/images/img-3.jpg',
        alt: 'banner-img',
    }
];


const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };


    return (
        <>
            <div className="hero-slider">
                <div className="slider-container">
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                        />
                    ))}

                    <div className="slider-controls">
                        <button className="previous-slide" onClick={goToPreviousSlide}>
                            {'<'}
                        </button>
                        <button className="next-slide" onClick={goToNextSlide}>
                            {'>'}
                        </button>
                    </div>

                    <div className="slider-points">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`slider-point ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                    <ContactCard />
                </div>
            </div>
        </>

    );
};

export default HeroSection;