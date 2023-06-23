import React from "react";
import { Button } from "./Button";
import './Footer.css';
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    APUNTAMOS A UN MUNDO MAS LIMPIO Y SUSTENTABLE
                </p>
                <p className="footer-subscription-text">
                    Vos Tambien Podes Ser Parte De La Solucion
                </p>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Sobre Nosotros</h2>
                        <Link to='/contact'>Quienes Somos</Link>
                        <Link to='/'>Nuestra Historia</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contacto</h2>
                        <Link to='/contact'>Donde Encontrarnos</Link>
                        <Link to='/'>Envianos un Email</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Links Utiles</h2>
                        <Link to='/contact'>Que son las energias Renovables</Link>
                        <Link to='/'>Como funcionan nuestros productos</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Informacion</h2>
                        <Link to='/'>Privacidad</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            <img src="/images/logo-01.png" alt="logo" className="logo-img" />
                        </Link>
                    </div>
                    <div className="social-links">
                        <Link
                            className="social-icon-link facebook"
                            to='/'
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <BsFacebook />
                        </Link>
                        <Link
                            className="social-icon-link instagram"
                            to='https://www.instagram.com/costaasolar/'
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <BsInstagram />
                        </Link>
                        <Link
                            className="social-icon-link twitter"
                            to='/'
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <BsTwitter />
                        </Link>
                    </div>
                </div>
            </section>
            <p className="website-rights">Todos los derechos reservados ©2023</p>
        </div>
    );
}

export default Footer