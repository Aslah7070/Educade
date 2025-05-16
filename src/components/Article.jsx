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

    const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000); 
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

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
          <Image   className={`animate__animated ${animate ? 'animate__bounce' : ''}`} src={left} width={500} height={500} alt="" />
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
          <Image  className={`animate__animated ${animate ? 'animate__bounce' : ''}`} src={right} width={500} height={500} alt="" />
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

