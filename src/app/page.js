import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { Article } from "@/components/Article";
import Story from "@/components/Story";
import Teaching from "@/components/Teaching";

import TestimonialCarousel from "@/components/Testimonial";
import TestimonialSlider from "@/components/Testimonial";
import Programs from "@/components/Programs";
import Subjects from "@/components/Subjects";
import Exams from "@/components/Exams";
import MoreAbout from "@/components/MoreAbout";
import FAQAccordion from "@/components/Accordian";
import BlogSection from "@/components/Blogs";
import Footer from "@/components/Footer";
import Media from "@/components/youtube";

export default function Home() {
  return (
    <div className="container-fluid  p-0 ">
      <Header/>
      <Article/>
      <Story  />
      <Teaching/>
      {/* <TestimonialCarousel/> */}
      <Programs/>
          <Subjects/>
           <Media/>
      <Exams/>

   
    <MoreAbout/>
    <FAQAccordion/>
    <BlogSection/>
    <Footer/>
   
    </div>
  );
}
