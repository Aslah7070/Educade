"use client";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Button } from "react-bootstrap";
import CallMadeIcon from '@mui/icons-material/CallMade';
import ielts from "../assets/ielts.png";
import cambridge from "../assets/cambridge.png";
import toefl from "../assets/toefl.png";
import pte from "../assets/pte.png";

const Exams = () => {
  const testimonials = [
    {
      title: "IELTS Preparation",
      description:
        "Focus on all four sections: Listening, Reading, Writing, and Speaking.",
      image: ielts,
    },
    {
      title: "TOEFL Mastery",
      description:
        "Comprehensive coverage of Reading, Listening, Speaking, and Writing sections.",
      image: toefl,
    },
    {
      title: "PTE Academic Course",
      description:
        "Time-saving strategies and practice tests with instant feedback.",
      image: pte,
    },
    {
      title: "Cambridge English (CAE)",
      description:
        "Preparation for high-level English skills in Listening, Speaking, Reading, and Writing.",
      image: cambridge,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">
          Master in <span style={{ color: "#664E2B" }}>IELTS, TOEFL Exams</span>
        </h2>
            <button type="button" className=" me-md-5 bg-maroon rounded-3 ">
            View All <CallMadeIcon/>
          </button>
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {testimonials.map((item, index) => (
          <Card
            key={index}
            style={{
              borderRadius: "20px",
              boxShadow: "8px 8px 0px rgba(160, 48, 85, 0.5)",
              overflow: "hidden",
              backgroundColor: "#FFF4E8",
              minHeight: "100%",
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={200}
              style={{ objectFit: "cover", width: "100%" }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#991B48", fontWeight: "600" }}>
                {item.title}
              </Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default Exams;
