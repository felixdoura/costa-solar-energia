import React from "react";
import { Button } from "./Button";
import './Footer.css';
import { Link } from "react-router-dom";

function Footer () {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure Newsletter to receive vacation Deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Add your Email"
                            className="footer-input"
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
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
                            LOGO <i className="fab fa-typo3" />
                        </Link>
                    </div>
                    <small className="website-rigths">LOGO 2023</small>
                    <Link 
                        className="social-icon-link facebook"
                        to='/'
                        target="_blank"
                        aria-label="Facebook"
                    >
                        <i fab fa-facebook-f></i>
                    </Link>
                    <Link 
                        className="social-icon-link instagram"
                        to='/'
                        target="_blank"
                        aria-label="Instagram"
                    >
                        <i fab fa-instagram></i>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Footer