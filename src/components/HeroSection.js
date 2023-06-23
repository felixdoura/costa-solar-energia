import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { BsWhatsapp } from 'react-icons/bs'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-solar.mp4' autoPlay loop muted />
            <h1>Costa Solar Energia Renovable</h1>
            <p className='slogan'>APUNTAMOS A UN MUNDO MAS LIMPIO Y SUSTENTABLE</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    CONOZCANOS
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    WHATSAPP <BsWhatsapp />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;