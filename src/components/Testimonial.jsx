

"use client";

import React from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import paint from "../assets/paint.png";
import Story from "../assets/kid3.png";
import teach from "../assets/ABC.png";
import Image from "next/image";
import CallMadeIcon from '@mui/icons-material/CallMade';

const testimonials = [
  {
    name: "English Grammar",
    text: "Master the building blocks of writing and communication.",
    photo: paint,
  },
  {
    name: "Craft Classes",
    text: "Unleash creativity with hands-on projects and artistic fun.",
    photo: Story,
  },
  {
    name: "Art and Painting",
    text: "Express yourself through colors, sketches, and designs",
    photo: teach,
  },
  {
    name: "John Doe",
    text: "Fantastic product with amazing support.",
    photo: paint,
  },
  {
    name: "Emma Watson",
    text: "My team loves this, highly recommended.",
    photo: teach,
  },
  {
    name: "Emma Watson",
    text: "My team loves this, highly recommended.",
    photo: Story,
  },
];

function chunkArray(arr, chunkSize) {
  const results = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    results.push(arr.slice(i, i + chunkSize));
  }
  return results;
}

const TestimonialSlider = () => {
  const chunks = chunkArray(testimonials, 3);

  return (
    <Container style={{ marginTop: "40px" }}>
      <Carousel interval={3000} pause={false} indicators controls>
        {chunks.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row
              className="d-flex justify-content-center align-items-center w-100 "
              style={{ gap: "20px" }}
            >
              {group.map((t, index) => (
                <Col
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  className="d-flex flex-column flex-md-row custom-md-w-25 position-relative  bg-custom-peach rounded-3 align-items-center p-3"
                  style={{ gap: "15px" }}
                >
                  <div style={{ flex: 1 }}>
                    <h6
                      className="text-maroon"
                      style={{ fontWeight: "bold", marginTop: "10px" }}
                    >
                      {t.name}
                    </h6>
                    <p
                      className="text-maroon"
                      style={{ fontStyle: "italic", textAlign: "start" }}
                    >
                      {t.text}
                    </p>
                           <button type="button" className=" me-md-5 bg-maroon rounded-3 ">
            View All <CallMadeIcon/>
          </button>
                  </div>
                  <div
                  className=""
                    style={{
                      width: "100px",
                      height: "200px",
                    //   borderRadius: "50%",
                      overflow: "hidden",
                    //   border: "3px solid #0d6efd",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={100}
                      height={300}
                    //   style={{ objectFit: "cover" }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default TestimonialSlider;
