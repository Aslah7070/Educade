
"use client"
import React from 'react';
import CallMadeIcon from '@mui/icons-material/CallMade';
import TestimonialSlider from './Testimonial';

const Programs = () => {
  return (
    <div className='container-fluid mt-5'>
      <div className='row align-items-center mb-4'>
        <div className='col-12 col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0'>
          {/* Empty div, can add content later */}
        </div>
        <div className='col-12 col-md-5 text-center text-md-start mb-3 mb-md-0'>
          <h1>Programs we offer for Kids</h1>
        </div>
        <div className='col-12 col-md-3 d-flex justify-content-center justify-content-md-end'>
          <button type="button" className=" me-md-5 bg-maroon rounded-3 ">
            View All <CallMadeIcon/>
          </button>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Programs;
