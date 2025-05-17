"use client";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import vector from "../assets/Vector.png"
import Image from 'next/image';
import fam1 from "../assets/fam1-.png"
import fam2 from "../assets/fam3-.png"

const testimonials = [
    {
        name: 'Sarah H',
        role: 'Accountant',
        text: "Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!",
        image: fam1,
        rating: 5,
    },
    {
        name: 'Ahmed K',
        role: 'Engineer',
        text: "Educare’s commitment to 1-on-1 learning transformed our son’s understanding of science. Recent top scores prove Educare delivers results. Grateful for the positive impact!",
        image: fam2,
        rating: 5,
    },
    {
        name: 'Fatima Z',
        role: 'Nurse',
        text: "Educare was a blessing for our daughter’s English! She now speaks and writes fluently. Couldn’t be happier!",
        image: fam1,
        rating: 5,
    },


];

const MoreAbout = () => {
    return (
        <div className="container  py-5">
            <h3 className=" ">
                <strong> <span className="text-dark"></span></strong>
            </h3>
               <h1 className='mb-5 text-center' style={{color: 'rgba(101, 89, 69, 1)' }}>
 Hear from our <span style={{ fontWeight: 'bold'}}>Valuable Parents</span>
</h1>

            <div  className="row d-flex justify-content-center  ">
                {testimonials.map((testimonial, i) => (
                   <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4" key={i}>
  <div className="testimonial-card bg-white border rounded shadow-sm p-4 position-relative w-100">
    
<div
  className="position-absolute"
  style={{
    top: '-15px',
    right: '-15px',
  }}
>
  <Image src={vector} width={40} height={40} alt="Quote Icon" />
</div>
    <div className="position-absolute top-0  translate-middle-y" style={{ transform: 'translate(-50%, -50%)' }}>
    <Image
  src={testimonial.image}
  alt={testimonial.name}
  className="rounded-circle border border-3"
  width={60}
  height={60}
  style={{ objectFit: 'cover' }}
/>
     
    </div>

    {/* Card Content */}
    <div className="pt-5 text-center ">
      <div style={{height:"100px"}} className=''>
        <p className="small text-muted text-start">"{testimonial.text}"</p>
      </div>
      <div className='d-flex justify-content-between'>
        <div className="star-rating text-warning mb-2">
        {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
      </div>
      <div>
        <div className="testimonial-author fw-bold text-danger">{testimonial.name}</div>
      <div className="testimonial-job text-muted small">{testimonial.role}</div>
      </div>
      </div>
    </div>
  </div>
</div>
                ))}
            </div>
        </div>
    );
};

export default MoreAbout;
