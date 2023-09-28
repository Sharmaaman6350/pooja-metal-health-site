import React from 'react'
import Header from '../Components/Header/Header'
import "./common.css"
import abtimg from "../images/stuti_psy.jpg"
import service1 from "../images/ocd.jpg"
import service2 from "../images/anx.jpg"
import service3 from "../images/id.jpg"
import service4 from "../images/dep.jpg";
import adbanner from "../images/therapy-seesion.png";
import whyus from "../images/why-us.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePrescription, faFrown, faLaptopMedical, faPhone, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
const Home = () => {
  return (
    <>
      <Header  link="#whyus" home="home"/>
      <section className="top-main-banner">
        <div className="bannerImg">

          <div className="overlayText">
            <h1>PsyHealth | Healing Brains...</h1>
            <p>Professional Counselling & Psychotherapy Services <br />in Jaipur</p>
            <div className="bannerBtn">
              <Link to="/services" className='btn contactBtn'> View All Services</Link>
              <Link to="#" className='btn contactBtn'> Contact us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="main-about-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="aboutText pt-3 pe-3">
                <h2 className='fw-bold mb-3'>A Few Words <span className='extraline'>About Me</span></h2>
                <h5 className='fw-bold mt-4 mb-0'>Pooja Sharma, RCI licensed <span className='extraline'>Clinical Psychologist in Jaipur</span></h5>
                <p className=' text-secondary pb-2'><small>(RCI Reg. No.: A54219)</small></p>
                <p className='text-black mb-4 description text-justify pe-3'>Has persued M.Phil. in Clinical Psychology. Her areas of interest are: Anxiety, OCD, Depression, Personality disorder, Adjustment disorder, Marital & family conflicts & Childhood problems. An expert of different types of psychotherapy techniques including Cognitive Behavior Therapy (CBT), Exposure Response Prevention (ERP), Short term psychotherapy ,
                  Relaxation , Anger management , Marital counselling & family counselling.</p>
                <Link to="#" className='btn contactBtn mt-3'> Get Appointment</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="aboutImg ">
                <Image src={abtimg} alt="about image" className='' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section  py-5">
        <div className="container-fluid">
          <div className="row top-details">
            <div className="heading">
              <h2 className='fw-bold mb-3 text-center text-black'>PsyHealth <span className="extraline">Consultaions & Services</span></h2>
            </div>
            <p>“If you discovered something that made you tighten inside, you had better try to learn more about it.”</p>
            <p>― Nicholas Sparks</p>

          </div>

          <div className="row mt-5 mb-5 mb-sm-0">
            <div className="col-md-3">
              <div className="service-box">
                <Link to="/obsessive-cumpulsive-disorder" className='text-black'>
                  <img src={service1} alt="obsessive compulsive disorder" />
                  <div className="box-title text-center py-2">
                    <h6 className='fw-bold'>Obsessive Compulsive Disorder(OCD)</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service-box">
                <Link to="/anxiety-disorder" className='text-black'>

                  <img src={service2} alt="Anxiety Disorders" />
                  <div className="box-title text-center py-2">
                    <h6 className='fw-bold'>Anxiety Disorders</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service-box">
                <Link to="/intellectual-disability" className='text-black'>

                  <img src={service3} alt="Intellectual Disability" />
                  <div className="box-title text-center py-2">
                    <h6 className='fw-bold'>Intellectual Disability</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service-box">
                <Link to="/depression" className='text-black'>

                  <img src={service4} alt="depression" />
                  <div className="box-title text-center py-2">
                    <h6 className='fw-bold'>Depression</h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <center><Link to="/services" className='btn contactBtn mt-3'> View All Services</Link></center>
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
            <div className="col-md-6 col-sm-12">
              <div className="right-content">

                <h2 className='text-center text-white fw-bold'>Need Consultation?</h2>
                <h6 className='text-center text-white '>Contact us for all Psychological & Mental Health problems</h6>
                <p className='text-center text-white mb-5'>(Mon-Sat : 10 AM To 6 PM)</p>
                <div className="contact-detail ms-5 ms-sm-0">
                  <a href="mailto:Sharmapooja403542@gmail.com" className='text-white mail '><FontAwesomeIcon icon={faEnvelope} className='me-2' />Sharmapooja403542@gmail.com</a>
                  <a href="tel:6350575063" className=' phone '><FontAwesomeIcon icon={faPhone} className='me-2' />+91 9636386305</a>
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
            <div className="col-md-7 imgSection">
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
          <center><Link to="#" className='btn contactBtn mt-3 mb-5'> Get Appointment</Link></center>
        </div>
      </section>

<Footer/>

    </>
  )
}

export default Home