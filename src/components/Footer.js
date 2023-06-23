import React from "react";
import { Button } from "./Button";
import './Footer.css';
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure Newsletter to receive vacation Deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/contact'>How It Works</Link>
                        <Link to='/'>User Reviews</Link>
                        <Link to='/'>Example</Link>
                        <Link to='/'>Example 2</Link>
                        <Link to='/'>Example 3</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact</h2>
                        <Link to='/contact'>How It Works</Link>
                        <Link to='/'>User Reviews</Link>
                        <Link to='/'>Example</Link>
                        <Link to='/'>Example 2</Link>
                        <Link to='/'>Example 3</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Products</h2>
                        <Link to='/contact'>How It Works</Link>
                        <Link to='/'>User Reviews</Link>
                        <Link to='/'>Example</Link>
                        <Link to='/'>Example 2</Link>
                        <Link to='/'>Example 3</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/contact'>How It Works</Link>
                        <Link to='/'>User Reviews</Link>
                        <Link to='/'>Example</Link>
                        <Link to='/'>Example 2</Link>
                        <Link to='/'>Example 3</Link>
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
                    </div>
                </div>
            </section>
            <p className="website-rights">Todos los derechos reservados ©2023</p>
        </div>
    );
}

export default Footer