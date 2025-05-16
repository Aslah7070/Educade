"use client"

import React from 'react';
import teach from "../assets/teach.png";
import Image from 'next/image';

const Teaching = () => {
  const teachingPoints = [
    <>Every teacher at <strong>Educare</strong> brings passion to their lessons, making learning enjoyable with engaging activities tailored to inspire and motivate each student.</>,
    "We focus on creating a supportive environment where individual strengths are recognized, and personalized attention helps students excel.",
    "Our approach combines innovative teaching methods with real-world applications, ensuring students not only learn but also understand and apply their knowledge effectively."
  ];

  return (
    <div className='container-fluid bg-ofwhite py-5'>
      <div className='row align-items-center'>
        <div className='col-12 col-lg-5 mb-4 mb-lg-0 d-flex justify-content-center'>
          <div className='w-100 px-3 px-lg-0' style={{ maxWidth: '500px' }}>
            <h1>
              Our way of <span style={{ fontWeight: 'bold' }}>Teaching</span>
            </h1>
            <ul>
              {teachingPoints.map((point, index) => (
                <li key={index} className="mb-3">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='col-12 col-lg-7 d-flex justify-content-center'>
          <Image
            src={teach}
            alt="Teaching Illustration"
            className="img-fluid"
            style={{ width: '100%', maxWidth: '800px', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Teaching;
