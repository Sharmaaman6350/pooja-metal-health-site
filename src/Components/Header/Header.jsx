
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../images/psy_logo.png"
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <>
            <header>
                <div className="top-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-10">

                                <div className="top-header-left d-flex gap-4">
                                    <div className="phone">
                                        <p>
                                            <Link href=''>
                                                <FontAwesomeIcon icon={faPhone} className='faicon' />
                                                +91 9636386305
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="mail ">
                                        <p>
                                            <Link href=''>
                                                <FontAwesomeIcon icon={faEnvelope} className='faicon' />
                                                sharmapooja403542@gmail.com
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="timing mt-1">
                                        <p>
                                            Mon-Sat : 10 AM to 6 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 ">

                                <div className="top-header-right ">

                                    <Link href="#">
                                        <FontAwesomeIcon icon={faFacebookF} className='faicon mx-3' />
                                    </Link>
                                    <Link href="#">
                                        <FontAwesomeIcon icon={faWhatsapp} className='faicon mx-3' />
                                    </Link>
                                    <Link href="#">
                                        <FontAwesomeIcon icon={faInstagram} className='faicon mx-3' />
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Navbar expand="lg" className="bg-body-tertiary top-navbar">
                    <div className="container-fluid">

                        <Navbar.Brand href="/"><img src={logo} alt="logo" className='headerLogo' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav " className='basic-navbar'>
                            <Nav className="me-auto">
                                <Nav.Link href="/" className={`${props.home ? "active" : ""}`}>Home</Nav.Link>
                                <Nav.Link href="/about" className={`${props.about ? "active" : ""}`}>About</Nav.Link>
                                <Nav.Link href="/services" className={`${props.service ? "active" : ""}`}>Services</Nav.Link>


                                <Nav.Link href={props.link}>Why Us</Nav.Link>
                                <Nav.Link href="#link2">Blog</Nav.Link>
                            </Nav>
                            <Button className='contactBtn'>Get Appointment</Button>
                        </Navbar.Collapse>

                    </div>
                </Navbar>
            </header>
        </>
    );
}

export default Header;