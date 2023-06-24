import React from "react";
import '../../App.css';
import Footer from "../Footer";

function Location() {
    return (
        <>
            <div className="location">
                <h1 className="location-title">Donde Encontrarnos</h1>
                <p className="location-info">Nuestro emprendimiento se encuentra en Santa Teresita, Partido de la Costa, en la Provincia de Buenos Aires.</p>
            </div>
            <div className="map-wrapper">
                <iframe
                    title='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25645.034459159368!2d-56.702823699999996!3d-36.538936549999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c131d84c3cc7f%3A0x8b862911d58aa6d3!2sSanta%20Teresita%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1687557435453!5m2!1ses-419!2sar"
                    width="90%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <Footer />
        </>
    )
}

export default Location