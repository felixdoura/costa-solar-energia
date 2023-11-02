import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import './ContactCard.css'


function ContactCard() {
    return (
        <>
            <div className='contact-card-container'>
                <div className='contact-card-wrapper'>
                    <h2>Costa Solar Energia Renovable</h2>
                    <p>APUNTAMOS A UN MUNDO MAS LIMPIO Y SUSTENTABLE</p>
                    <div className='contact-card-btns'>
                        <a
                            href='https://api.whatsapp.com/send?phone=5492246535844'
                            className='btns whatsapp-link'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                        // onClick={console.log('hey')}
                        >
                            WHATSAPP <BsWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCard