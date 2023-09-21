import React from 'react'
import Header from '../Components/Header/Header'
import { Link } from 'react-router-dom'
import sideImg from "../images/dep.jpg"
import adbanner from "../images/therapy-seesion.png";
import whyus from "../images/why-us.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor, faEnvelope, faFilePrescription, faFrown, faLaptopMedical, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Components/Footer/Footer';

const DepressionPage = () => {
    document.title = "Depression Counselling Services In Vaishali Nagar Jaipur "
    return (
        <>
            <Header service="service" />
            <section className="title-banner bg-lightbrown py-4 pb-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className='fw-bold text-white '>Depression</h1>
                        </div>
                        <div className="col-md-4 pt-3">
                            <ol className="breadcrumb " >
                                <li  ><Link href="/" className='text-white fw-bold'>Home /</Link></li>
                                <li  ><Link href="/services" className='text-white fw-bold'>Services /</Link></li>
                                <li className=" text-white fw-bold" >Depression</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className='innerpage-details my-5'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">

                            <div className="left-content pe-3">
                                <h2 className='fw-bold mb-4'>Depression</h2>
                                <p>A depressed mood and a loss of interest of pleasure are the key symptom of depression. Person may feel blue, hopeless, helpless, and worthless. Patients often describe the symptom of depression as one of agonizing emotional pain and sometimes complains about unable to cry. About two- thirds of all the depressed patient contemplate suicide, & 10-to 15 percent commit suicide.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="right-content px-3">
                                <img src={sideImg} alt="ocd image" />
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <section className="main-ad-banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-content p-3">
                                <img src={adbanner} alt="therapy session " />
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="right-content">

                                <h2 className='text-center text-white fw-bold'>Need Consultation?</h2>
                                <h6 className='text-center text-white '>Contact us for all Psychological & Mental Health problems</h6>
                                <p className='text-center text-white mb-5'>(Mon-Sat : 10 AM To 6 PM)</p>
                                <div className="contact-detail ms-5 ">
                                    <Link to="#" className='text-white mail '><FontAwesomeIcon icon={faEnvelope} className='me-2' />Sharmapooja403542@gmail.com</Link>
                                    <Link to="#" className=' phone '><FontAwesomeIcon icon={faPhone} className='me-2' />+91 9636386305</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="main-specialist-section py-5 bg-lightGray" id='whyus'>
                <div className="container-fluid">
                    <div className="row mb-5">
                        <h2 className='fw-bold  text-black'>Our <span className="extraline">Specialities</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <Link to="#"><img src={whyus} alt="why to choose us" className='' height={400} width={100} /></Link>
                        </div>
                        <div className="col-md-5">
                            <div className="right-section px-3">
                                <div className="main-box d-flex ">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faUserDoctor} />
                                    </div>
                                    <div className="box-content">
                                        <h6 className='fw-bold'>RCI Certified Counseller</h6>
                                        <p>Pooja Sharma, a RCI licensed clinical psychologist, M.Phil. in Clinical Psychology.</p>
                                    </div>
                                </div>
                                <div className="main-box d-flex">
                                    <div className="icon">

                                        <FontAwesomeIcon icon={faFilePrescription} />
                                    </div>
                                    <div className="box-content">
                                        <h6 className='fw-bold'>Interactive Counselling</h6>
                                        <p>Making clients feel more positive & at peace with themselves.</p>
                                    </div>
                                </div>
                                <div className="main-box d-flex">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faLaptopMedical} />
                                    </div>
                                    <div className="box-content">
                                        <h6 className='fw-bold'>Tele / Online Counselling</h6>
                                        <p>Providing Tele & Online counseling for my clients.</p>
                                    </div>
                                </div>
                                <div className="main-box d-flex">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFrown} />
                                    </div>
                                    <div className="box-content">
                                        <h6 className='fw-bold'>Help You Fight Depression</h6>
                                        <p>Restoring happiness in your family & life.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <center><Link to="#" className='btn contactBtn mt-3 mb-5'> Book Your Appointment Now</Link></center>
                </div>
            </section>
            <Footer />


        </>
    )
}

export default DepressionPage