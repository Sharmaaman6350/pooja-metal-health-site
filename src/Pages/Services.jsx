import React from 'react'
import Header from '../Components/Header/Header';
import { Link } from 'react-router-dom';

import service1 from "../images/ocd.jpg"
import service2 from "../images/anx.jpg"
import service3 from "../images/add.jpg"
import service4 from "../images/dep.jpg";
import service5 from "../images/pd.jpg";
import service6 from "../images/id.jpg";
import adbanner from "../images/therapy-seesion.png";
import whyus from "../images/why-us.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor, faEnvelope, faFilePrescription, faFrown, faLaptopMedical, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Components/Footer/Footer';

const Services = () => {
    return (
        <>
            <Header service="service" />
            <section className="title-banner bg-lightbrown py-4 pb-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10">
                            <h1 className='fw-bold text-white  '>Services</h1>
                        </div>
                        <div className="col-md-2 pt-3">
                            <ol className="breadcrumb " >
                                <li  ><Link href="/" className='text-white fw-bold'>Home /</Link></li>
                                <li className=" text-white fw-bold" > Services</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="main-about-section " >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="aboutText  pe-3">
                                <h2 className='fw-bold mb-3'>Our Consultation & Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p className='para'>Our aim is to educate about the illness and get over the stigma spread in the world. It is really painful to know the fact that people in the society are very much active for their physical problems but they feel hesitant to visit to a mental hospital. Our aim is to spread awareness about the mental health & make our society psychologically strong.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="main-services-section  py-5">
                <div className="container-fluid">


                    <div className="row  mb-5">
                        <div className="col-md-4">
                            <div className="service-box">
                                <Link to="/obsessive-cumpulsive-disorder" className='text-black'>
                                    <img src={service1} alt="obsessive compulsive disorder" />
                                    <div className="box-title text-center ">
                                        <h6 className='fw-bold'>Obsessive Compulsive Disorder(OCD)</h6>
                                        <p className=' py-2'>Represented by a disease group of symptoms that includes intrusive thought rituals, preoccupation and compulsions.These recurrent obsession and compulsion causes distress to the person. The obsession and compulsion are time consuming and interfere significantly with the person’s normal routine, occupational functioning, usual social activities, or relationships.</p>
                                    </div>
                                    <center><Link to="/obsessive-cumpulsive-disorder" className='btn contactBtn my-3'>Read More</Link></center>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <Link to="/anxiety-disorder" className='text-black'>

                                    <img src={service2} alt="Anxiety Disorders" />
                                    <div className="box-title text-center ">
                                        <h6 className='fw-bold'>Anxiety Disorders</h6>
                                        <p>Characterized most commonly as diffuse, unpleasant, vague sense of apprehension, often accompanied by automatic symptoms such as headache,perspiration, palpitations, and tightness in the chest, stomach discomfort and restlessness etc.</p>
                                    </div>
                                    <center><Link to="/anxiety-disorder" className='btn contactBtn my-3'>Read More</Link></center>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <Link to="/adjustment-disorder" className='text-black'>

                                    <img src={service3} alt="Adjustment Disorders" />
                                    <div className="box-title text-center ">
                                        <h6 className='fw-bold'>Adjustment Disorders</h6>
                                        <p>Adjustment disorders are characterized by an emotional response to stressful event. Typically, the stressor involves financial issues, medical illness and relationship problem. The symptoms complex that develop may involve anxious and depressive affect and may present with a disturbance of conduct.</p>
                                    </div>
                                    <center><Link to="/adjustment-disorder" className='btn contactBtn my-3'>Read More</Link></center>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="row  mb-5">
                        <div className="col-md-4">
                            <div className="service-box">
                                <Link to="/depression" className='text-black'>
                                    <img src={service4} alt="Depression" />
                                    <div className="box-title text-center ">
                                        <h6 className='fw-bold'>Depression</h6>
                                        <p className=' py-2'>A depressed mood and a loss of interest of pleasure are the key symptom of depression. Person may feel blue, hopeless, helpless, and worthless. Patients often describe the symptom of depression as one of agonizing emotional pain and sometimes complains about unable to cry. About two- thirds of all the depressed patient contemplate suicide, & 10-to 15 percent commit suicide.</p>
                                    </div>
                                    <center><Link to="/depression" className='btn contactBtn my-3'>Read More</Link></center>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <Link to="/personality-disorder" className='text-black'>

                                    <img src={service5} alt="Personality Disorders" />
                                    <div className="box-title text-center ">
                                        <h6 className='fw-bold'>Personality Disorders</h6>
                                        <p>Personality disorder are common and chronic. They occur in 10-20 percent of the general population. Personality disorder is also a predisposing factor for other psychiatric disorder (e.g., substance use, affective disorder, suicide, impulse control disorder, eating disorder, anxiety disorder). Person with personality disorders are far more likely to refuse psychiatric help and deny there problem.</p>
                                    </div>
                                    <center><Link to="/personality-disorder" className='btn contactBtn my-3'>Read More</Link></center>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <Link to="/intellectual-disability" className='text-black'>

                                    <img src={service6} alt="Intellectual Disability" />
                                    <div className="box-title text-center ">
                                        <h6 className='fw-bold'>Intellectual Disability</h6>
                                        <p>Also known as mental retardation can be caused by a range of environmental and genetic factors that lead to a combination of cognitive and social impairment.</p>
                                    </div>
                                    <center><Link to="/intellectual-disability" className='btn contactBtn my-3'>Read More</Link></center>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            <section className='addBanner '>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <h4>NEED CONSULTATION?</h4>
                            <p>Contact us for all psychological problems.</p>
                        </div>
                        <div className="col-md-4 ">
                            <center className='mt-4'> <Link to="#" className='btn contactBtn'>Get Appointment</Link></center>
                        </div>
                    </div>
                </div>
            </section>
            <section className="main-about-section " >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="aboutText">
                                <h2 className='fw-bold mb-2'>Psychotherapeutic Treatments, We Provide</h2>
                                <h6 className='text-black fw-bold'>Many Psychological Disorders Requires Psychotherapeutic Treatment, We Provide :-</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row my-4 ">
                        <div className="col-md-6">
                            <div className="therapy-box d-flex">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUserDoctor} className='faicon' />
                                </div>
                                <div className="details">
                                    <h6>Cognitive Behavioral Therapy (CBT)</h6>
                                    <p>CBT involves learning new skill to manage your problems.It teaches you new ways of thinking and behaving that can help you get control over anxiety and depression in long-run.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="therapy-box d-flex ">

                                <div className="icon">
                                    <FontAwesomeIcon icon={faUserDoctor} className='faicon' />
                                </div>
                                <div className="details">
                                    <h6>Psychodynamic Psychotherapy</h6>
                                    <p>It focuses on resolving unconscious conflict of individuals.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-md-6">
                            <div className="therapy-box d-flex">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUserDoctor} className='faicon' />
                                </div>
                                <div className="details">
                                    <h6>Behavioral Therapy</h6>
                                    <p>CBT involves learning nHelps the client to change their maladaptive behavioral patterns, which affect their day today life functioning</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="therapy-box d-flex">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUserDoctor} className='faicon' />
                                </div>
                                <div className="details">
                                    <h6>Relaxation Therapy</h6>
                                    <p>Relaxation technique is a method that helps the person to relax, it is helpful in reducing pain, anxiety, depression & stress</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-6">
                            <div className="therapy-box d-flex">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUserDoctor} className='faicon' />
                                </div>
                                <div className="details">
                                    <h6>Interpersonal Therapy</h6>
                                    <p>The therapy helps individuals to maintain healthy interpersonal relationships.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="therapy-box d-flex">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUserDoctor} className='faicon' />
                                </div>
                                <div className="details">
                                    <h6>Supportive Psychotherapy</h6>
                                    <p>It aims at facilitating the patient’s adaptive skills and psychological functions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-6">
                            <div className="therapy-box d-flex">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUserDoctor} className='faicon' />
                                </div>
                                <div className="details">
                                    <h6>Family Therapy</h6>
                                    <p>Family therapy can be defined as any psychotherapeutic endeavor that explicitly focuses on the altering the interactions between or among family members. And seek to improve the functioning of the family as a unit, or it’s subsystems, and the functioning of individual members of the family. Both family therapy and couple therapy aim at some change in relational functioning.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="therapy-box d-flex">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUserDoctor} className='faicon' />
                                </div>
                                <div className="details">
                                    <h6>Group Therapy</h6>
                                    <p>Group counselling is a form of therapy where people with similar experiences/issues come together with a professional therapist. The therapist runs the session, but generally everyone contributes in some way, listening to others and talking themselves. It's usually focused on a particular issue, like: addiction, depression etc.</p>
                                </div>
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

export default Services