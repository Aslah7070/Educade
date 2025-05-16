
"use client"
import React from "react";
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"
import blog4 from "../assets/blog4.png"

const blogs = [
  {
    title: "Top tips for effective home tutoring",
    description:
      "Share practical advice on how students can make the most out of tutoring sessions.",
    image:blog1,
  },
  {
    title: "Building a productive study environment",
    description:
      "Share practical advice on how students can make the most out of tutoring sessions.",
    image:blog2,
  },
  {
    title: "5 Skills every great tutor should have",
    description:
      "Outline essential skills for tutors, such as patience, adaptability, subject knowledge.",
    image:blog3,
  },
  {
    title: "Getting the best individual tuition",
    description:
      "Share practical advice on how students can make the most out of tutoring sessions.",
    image:blog4,
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>
          Our Latest <span>Blog Posts</span>
        </h2>
        <button className="view-all">View All →</button>
      </div>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image.src} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
