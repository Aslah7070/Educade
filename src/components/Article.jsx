"use client";
import Image from "next/image";
import bg from "../assets/bg1.png";
import logo from "../assets/logo.png";
import left from "../assets/leftArticle.svg"
import right from "../assets/rightArticle.svg"
import art1 from "../assets/sabis.png"
import art2 from "../assets/canadian.png"
import art3 from "../assets/artT3.png"
import userFocus from "../assets/UserFocus.png"
import Trophy from "../assets/Trophy.png"
import Student from "../assets/Student.png"
import HandHeart from "../assets/HandHeart.png"
// import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from "react";
import CallMadeIcon from '@mui/icons-material/CallMade';
import { Carousel, Container } from 'react-bootstrap';
export const Article = () => {
   const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
   useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 3500); 
    const interval = setInterval(() => {
      setFade(true);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
  
   const testimonials = [
  {
 
    text:  "Tutoring at Our Center!",
    spans: "Personalized One-to-One",
  },
  {
  
    text: "For all students till 12th grade!",
    spans: "Individual Tuition, ",
  },
  {
   
    text: "Beyond with Expert Guidance!",
    spans: "Master IELTS, TOEFL, and ",
  },
];
    const slides = [
  {
    src: art1,
    alt: 'First slide',
  },
  {
    src: art2,
    alt: 'Second slide',
  },
  {
    src: art3,
    alt: 'Third slide',
  },
  
];

 

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div
      className="container-fluid "
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh"
      }}
    >
      <div className="row h-25">
        <div className="col-12    h-75 d-flex justify-content-center align-items-center">
  
      <Container style={{ maxWidth: "600px", marginTop: "40px" }}>
      <div
        className={`text-center transition-opacity ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transition: "opacity 1s ease-in-out",
          minHeight: "180px",
        }}
      >
        <p className="fs-1 text-maroon mt-5">
          <span style={{ fontWeight: 900 }} className="fs-1">
            {testimonials[index].spans}
          </span>
          <br />
          {testimonials[index].text}
        </p>
      </div>
    </Container>
        </div>
      </div>
      <div className="row d-flex justify-content-center ">
        <div className="col-md-4">
          <Image className="" src={left} width={500} height={500} alt="" />
        </div>
        <div className="col-md-4  d-flex flex-column justify-content-evenly align-items-center ">
          <button type="button" className=" rounded-3  bg-maroon w-50 me-5">
            Book a Free Demo Class
            <CallMadeIcon/>
          </button>
          <p className="text-maroon fs-3"> Curriculums we offer:</p>
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            controls={false} 
            indicators={false} 
            interval={3000} 
            pause={false} 
          >
            {slides.map(({ src, alt }, idx) => (
              <Carousel.Item key={idx}>
                <div className="d-flex justify-content-center align-items-center gap-3">
      {slides.map(({ src, alt }, idx) => (
        <Image key={idx} src={src} alt={alt} width={100} height={50} />
      ))}
    </div>
             
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-md-4 ">
          <Image className="" src={right} width={500} height={500} alt="" />
        </div>
      </div>

   <div style={{ height:"100px"}} className="row">
      
<div className="col-12 d-flex   bg-custom-peach justify-content-evenly align-items-center">
       <div className=" d-flex align-items-center">
        <Image src={userFocus} alt={"alt"} width={40} height={40} />
        <p className="">Personal Attention</p>
       
       </div>
        <div className=" d-flex justify-content-center   align-items-center">
        <Image  src={HandHeart} alt={"alt"} width={40} height={40} />
         <p>Growth Mindset</p>
       </div>
           <div className=" d-flex align-items-center">
          <Image src={Student} alt={"alt"} width={40} height={40} />
         <p>Skill Development</p>
       </div>
          <div className=" d-flex align-items-center">
          <Image  src={Trophy} alt={"alt"} width={40} height={40} />
         <p>Passionate Teaching</p>
       </div>
</div>

   </div>

    </div>
  );
};


// "use client";

// import React from "react";
// import { Carousel, Row, Col, Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import paint from "../assets/paint.png"
// import Story from "../assets/Story.png"
// import teach from "../assets/ABC.png"
// import Image from "next/image";
// const testimonials = [
//   {
//     name: "English Grammar",
//     text: "Master the building blocks of writing and communication.",
//     photo:paint,
//   },
//   {
//     name: "Craft Classes",
//     text: "Unleash creativity with hands-on projects and artistic fun.",
//     photo: Story,
//   },
//   {
//     name: "Art and Painting",
//     text: "Express yourself through colors, sketches, and designs",
//     photo:teach,
//   },
//   {
//     name: "John Doe",
//     text: "Fantastic product with amazing support.",
//     photo: paint
//   },
//   {
//     name: "Emma Watson",
//     text: "My team loves this, highly recommended.",
//     photo:teach
//   },
//   {
//     name: "Emma Watson",
//     text: "My team loves this, highly recommended.",
//     photo:Story
//   },
// ];

// function chunkArray(arr, chunkSize) {
//   const results = [];
//   for (let i = 0; i < arr.length; i += chunkSize) {
//     results.push(arr.slice(i, i + chunkSize));
//   }
//   return results;
// }

// const TestimonialSlider = () => {
//   const chunks = chunkArray(testimonials, 3);

//   return (
//     <Container style={{ marginTop: "40px",  }}>
//       <Carousel interval={3000} pause={false} indicators controls>
//         {chunks.map((group, idx) => (
//           <Carousel.Item key={idx}>
//             <Row className="d-flex w-100  justify-content-center align-items-center " style={{ gap: "20px" }}>
//               {group.map((t, index) => (
//                 <Col key={index} md={4} className="d-flex bg-custom-peach w-25 rounded-3    align-items-center p-3">
//                  <div>
//                      <h6 className="text-maroon " style={{ fontWeight: "bold", marginTop: "10px" }}>{t.name}</h6>
//                   <p className="text-maroon "  style={{ fontStyle: "italic", textAlign: "start " }}>{t.text}</p>
//                  </div>
//                 <div
//   style={{
//     width: "200px",
//     height: "100px",
//     borderRadius: "50%",
//     overflow: "hidden",
//     marginBottom: "10px",
//     border: "3px solid #0d6efd",
//   }}
// >
//   <Image
//     src={t.photo}
//     alt={t.name}
//     width={200}
//     height={100}
//     style={{ objectFit: "cover" }}
//   />
// </div>
//                 </Col>
//               ))}
//             </Row>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </Container>
//   );
// };

// export default TestimonialSlider;


// // import React from 'react';
// // import { Carousel, Container } from 'react-bootstrap';

// // const testimonials = [
// //   {
// //     name: "Alice Johnson",
// //     position: "CEO, Company A",
// //     photo: "https://randomuser.me/api/portraits/women/44.jpg",
// //     text: "This product changed our workflow for the better. Highly recommend!",
// //   },
// //   {
// //     name: "Mark Smith",
// //     position: "Developer, Tech Corp",
// //     photo: "https://randomuser.me/api/portraits/men/36.jpg",
// //     text: "Excellent customer service and the product is easy to use.",
// //   },
// //   {
// //     name: "Jessica Lee",
// //     position: "Designer, Creative Studio",
// //     photo: "https://randomuser.me/api/portraits/women/65.jpg",
// //     text: "A beautiful and functional solution that boosted our sales.",
// //   },
// // ];

// // const TestimonialCarousel = () => {
// //   return (
// //     <Container style={{ maxWidth: '600px', marginTop: '40px' }}>
// //       <Carousel fade interval={4000} pause={false}>
// //         {testimonials.map((testimonial, index) => (
// //           <Carousel.Item key={index}>
// //             <div className="d-flex flex-column align-items-center text-center p-4">
// //               <img
// //                 src={testimonial.photo}
// //                 alt={testimonial.name}
// //                 className="rounded-circle mb-3"
// //                 style={{ width: '100px', height: '100px', objectFit: 'cover' }}
// //               />
// //               <p className="mb-3 fst-italic">"{testimonial.text}"</p>
// //               <h5>{testimonial.name}</h5>
// //               <small className="text-muted">{testimonial.position}</small>
// //             </div>
// //           </Carousel.Item>
// //         ))}
// //       </Carousel>
// //     </Container>
// //   );
// // };

// // export default TestimonialCarousel;
