import React from 'react'
import Header from '../Components/Header/Header';
import { Link } from 'react-router-dom';

import service1 from "../images/ocd.jpg"
import service2 from "../images/anx.jpg"
import service3 from "../images/id.jpg"
import service4 from "../images/dep.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <>
            <Header service="service" />
            <section className="title-banner bg-lightbrown py-4 pb-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10">
                            <h1 className='fw-bold text-white ms-4 '>Services</h1>
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
                                <Link to="#" className='text-black'>
                                    <img src={service1} alt="obsessive compulsive disorder" />
                                    <div className="box-title text-center ">
                                        <h6 className='fw-bold'>Obsessive Compulsive Disorder(OCD)</h6>
                                        <p className=' py-2'>Represented by a disease group of symptoms that includes intrusive thought rituals, preoccupation and compulsions.These recurrent obsession and compulsion causes distress to the person. The obsession and compulsion are time consuming and interfere significantly with the person’s normal routine, occupational functioning, usual social activities, or relationships.</p>
                                    </div>
                                    <center><Link to="#" className='btn contactBtn my-3'>Read More</Link></center>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <Link to="#" className='text-black'>

                                    <img src={service2} alt="Anxiety Disorders" />
                                    <div className="box-title text-center ">
                                        <h6 className='fw-bold'>Anxiety Disorders</h6>
                                        <p>Characterized most commonly as diffuse, unpleasant, vague sense of apprehension, often accompanied by automatic symptoms such as headache,perspiration, palpitations, and tightness in the chest, stomach discomfort and restlessness etc.</p>
                                    </div>
                                    <center><Link to="#" className='btn contactBtn my-3'>Read More</Link></center>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <Link to="#" className='text-black'>

                                    <img src={service3} alt="Adjustment Disorders" />
                                    <div className="box-title text-center ">
                                        <h6 className='fw-bold'>Adjustment Disorders</h6>
                                        <p>Adjustment disorders are characterized by an emotional response to stressful event. Typically, the stressor involves financial issues, medical illness and relationship problem. The symptoms complex that develop may involve anxious and depressive affect and may present with a disturbance of conduct.</p>
                                    </div>
                                    <center><Link to="#" className='btn contactBtn my-3'>Read More</Link></center>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="row  mb-5">
                        <div className="col-md-4">
                            <div className="service-box">
                                <Link to="#" className='text-black'>
                                    <img src={service4} alt="Depression" />
                                    <div className="box-title text-center ">
                                        <h6 className='fw-bold'>Depression</h6>
                                        <p className=' py-2'>A depressed mood and a loss of interest of pleasure are the key symptom of depression. Person may feel blue, hopeless, helpless, and worthless. Patients often describe the symptom of depression as one of agonizing emotional pain and sometimes complains about unable to cry. About two- thirds of all the depressed patient contemplate suicide, & 10-to 15 percent commit suicide.</p>
                                    </div>
                                    <center><Link to="#" className='btn contactBtn my-3'>Read More</Link></center>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <Link to="#" className='text-black'>

                                    <img src={service2} alt="Personality Disorders" />
                                    <div className="box-title text-center ">
                                        <h6 className='fw-bold'>Personality Disorders</h6>
                                        <p>Personality disorder are common and chronic. They occur in 10-20 percent of the general population. Personality disorder is also a predisposing factor for other psychiatric disorder (e.g., substance use, affective disorder, suicide, impulse control disorder, eating disorder, anxiety disorder). Person with personality disorders are far more likely to refuse psychiatric help and deny there problem.</p>
                                    </div>
                                    <center><Link to="#" className='btn contactBtn my-3'>Read More</Link></center>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                                <Link to="#" className='text-black'>

                                    <img src={service3} alt="Intellectual Disability" />
                                    <div className="box-title text-center ">
                                        <h6 className='fw-bold'>Intellectual Disability</h6>
                                        <p>Also known as mental retardation can be caused by a range of environmental and genetic factors that lead to a combination of cognitive and social impairment.</p>
                                    </div>
                                    <center><Link to="#" className='btn contactBtn my-3'>Read More</Link></center>
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
                            <div className="aboutText  pe-3">
                                <h2 className='fw-bold mb-3'>Psychotherapeutic Treatments, We Provide</h2>
                                <h6>Many Psychological Disorders Requires Psychotherapeutic Treatment, We Provide :-</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="therapy-box d-flex">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUserDoctor} />
                                </div>
                                <div className="details">
                                    <h6>Cognitive Behavioral Therapy (CBT)</h6>
                                    <p>CBT involves learning new skill to manage your problems.It teaches you new ways of thinking and behaving that can help you get control over anxiety and depression in long-run.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="therapy-box d-flex">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUserDoctor} />
                                </div>
                                <div className="details">
                                    <h6>Psychodynamic Psychotherapy</h6>
                                    <p>It focuses on resolving unconscious conflict of individuals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-6">
                            <div className="therapy-box d-flex">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUserDoctor} />
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
                                    <FontAwesomeIcon icon={faUserDoctor} />
                                </div>
                                <div className="details">
                                    <h6>Relaxation Therapy</h6>
                                    <p>Relaxation technique is a method that helps the person to relax, it is helpful in reducing pain, anxiety, depression & stress</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="therapy-box d-flex">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUserDoctor} />
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
                                    <FontAwesomeIcon icon={faUserDoctor} />
                                </div>
                                <div className="details">
                                    <h6>Supportive Psychotherapy</h6>
                                    <p>It aims at facilitating the patient’s adaptive skills and psychological functions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="therapy-box d-flex">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUserDoctor} />
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
                                    <FontAwesomeIcon icon={faUserDoctor} />
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

        </>
    )
}

export default Services