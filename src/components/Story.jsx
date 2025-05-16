import React from 'react';
import framer from "../assets/Frame.png";
import group from "../assets/story.png";
import arrow from "../assets/arrow.png";
import rocket from "../assets/rocket.png";
import flag from "../assets/flag.png";
import Image from 'next/image';
import CallMadeIcon from '@mui/icons-material/CallMade';

const Story = () => {
    return (
        <div  className="container-fluid mt-xl-7">
            {/* Top Section */}
            <div className='row mb-5 flex-column-reverse flex-lg-row'>
                <div className='col-lg-8 d-flex justify-content-center align-items-center mb-4 mt-5 mb-lg-0'>
                    <div className='w-100 px-3 px-lg-5'>
                        <h1>The Story of Educare</h1>
                        <p>
                            At Educare education center, we believe that every student deserves personalized, focused attention to reach their fullest potential. Our mission is to empower students through one-on-one tutoring, creating customized learning plans tailored to each individual's unique needs, strengths, and learning styles.
                        </p>
                        <p>
                            Founded on a passion for education and a commitment to excellence, Educare education center was established to offer students a supportive and engaging learning environment. Our team of experienced tutors is dedicated to helping students excel academically while also building confidence, independence, and a love for learning.
                        </p>
                        <p>
                            We specialize in a wide range of subjects across all grade levels, including math, science, English, and test preparation. Whether your child needs help catching up, getting ahead, or preparing for a specific exam, we are here to support their journey.
                        </p>
                        <button type="button" className=" w-100 rounded-3 bg-maroon w-md-75 w-lg-50 me-0 me-lg-5">
                            Read more <CallMadeIcon />
                        </button>
               
                    </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                    <div className="image-wrapper position-relative">
                        <Image className="image-back position-absolute" src={group} width={200} height={210} alt="group" />
                        <Image className="image-front position-relative" src={framer} width={250} height={250} alt="framer" />
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className='row gy-4'>
                <div className='col-12 col-md-4 d-flex justify-content-center'>
                    <div className='w-100 mx-3 bg-custom-peach p-4 d-flex justify-content-between align-items-center rounded'>
                        <div>
                            <h1 className="h5 fw-bold">Mission</h1>
                            <p className="mb-0">
                                To help students succeed with personalized, one-to-one tutoring that builds confidence, skills, and a love for learning.
                            </p>
                        </div>
                        <div>
                            <Image src={flag} width={100} height={110} alt="flag" />
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-4 d-flex justify-content-center'>
                    <div className='w-100 mx-3 bg-custom-peach p-4 d-flex justify-content-between align-items-center rounded'>
                        <div>
                            <h1 className="h5 fw-bold">Vision</h1>
                            <p className="mb-0">
                                To inspire students through transformative tutoring experiences that foster lifelong learning and achievement.
                            </p>
                        </div>
                        <div>
                            <Image src={rocket} width={100} height={110} alt="rocket" />
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-4 d-flex justify-content-center'>
                    <div>
                        <Image src={arrow} width={100} height={110} alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;
