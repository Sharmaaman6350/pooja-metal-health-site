import React from 'react'
import logo from "../../images/psy_logo_w.png";
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHeart, faPhone } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <>
            <footer>

                <div className="container-fluid">
                    <div className="row">

                        <div className="d-flex justify-content-between">
                            <div className="left-content">
                                <img src={logo} alt="footer logo" />
                                <br />
                                <div className="links ms-3   d-flex">
                                    <a href="#" >Blog</a>
                                    <a href="#">Sitemap</a>
                                    <a href="#">Privacy Policy</a>
                                </div>
                            </div>
                            <div className="right-content">
                                <div className="social-icons d-flex">
                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href="tel:6350575063"><FontAwesomeIcon icon={faPhone} /></a>
                                    <a href="mailto:sharmapooja403542@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                                </div>
                                <a href="#" className='text-white'>Crafted with <FontAwesomeIcon icon={faHeart} className='text-danger'/> by <span className='text-warning'> Aman Sharma</span></a>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer