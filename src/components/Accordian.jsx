"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What subjects do you offer tutoring in?",
      answer:
        "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
    },
    {
      question: "What ages or grade levels do you tutor?",
      answer:
        "We provide tutoring services for students from elementary school through college. Our tutors are experienced with all age groups and can adapt their teaching methods according to the student's age and learning style.",
    },
    {
      question: "Is tutoring one-on-one or in groups?",
      answer:
        "We offer both one-on-one tutoring and small group sessions. One-on-one sessions provide personalized attention, while group sessions offer a collaborative learning environment and are more cost-effective.",
    },
    {
      question: "Can sessions take place at our home?",
      answer:
        "Yes, we offer in-home tutoring services where our tutors can come to your home. We also provide online tutoring and sessions at our learning centers depending on your preference and location.",
    },
    {
      question: "What is the duration and frequency of each tutoring session?",
      answer:
        "Standard tutoring sessions last 60 minutes, but we offer flexible options ranging from 30 to 90 minutes. Frequency depends on the student's needs, with options from once weekly to multiple sessions per week.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Frequently Asked Questions</h2>

      <div className="accordion" id="faqAccordion">
        {faqData.map((item, index) => (
          <div className="accordion-item mb-2" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button d-flex justify-content-between align-items-center ${
                  activeIndex === index ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                {activeIndex === index ? (
                  <ChevronUp size={18} className="ms-2 text-secondary" />
                ) : (
                  <ChevronDown size={18} className="ms-2 text-secondary" />
                )}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <div className="accordion-body text-muted">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
