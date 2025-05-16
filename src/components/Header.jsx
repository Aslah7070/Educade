
"use client"
import React from 'react'
import logo from "../assets/logo.png"
import Image from 'next/image'
import BootstrapDropdown from './ui/dropdown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RingVolumeIcon from '@mui/icons-material/RingVolume';
const Header = () => {
    const midItems = [
  { text: "About us", color: "text-white" },
  { text: "Courses", color: "text-white" },
  { text: "Career", color: "text-white" }, 
  { text: "News & Blog", color: "text-white" },  
  { text: "Payments", color: "text-white" }      
];
const dropdownItems = [
  { label: "About us", onClick: () => scrollToSection("about") },
  { label: "Courses", onClick: () => scrollToSection("courses") },
  { label: "Career", onClick: () => scrollToSection("career") },
  { label: "News & Blog", onClick: () => scrollToSection("blog") },
  { label: "Payments", onClick: () => scrollToSection("payments") },
];
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
  <div className="container-fluid bg-maroon px-3">
  <div className="row">
    <div className="col-3  d-flex justify-content-center align-items-center order-1 order-md-1">
      <div className="d-flex justify-content-center align-items-center">
        <Image className="bg-info" src={logo} width={50} height={50} alt="" />
        <p className="fw-bold mt-3 ms-3 text-center">Educare</p>
      </div>
    </div>

    <div className="d-none d-md-flex justify-content-evenly align-items-center p-0 col-5  order-3 order-md-2">
      {midItems.map((item, index) => (
        <p key={index} className={`p-0 m-0 text-center ${item.color}`}>
          {item.text}
        </p>
      ))}

    </div>
    
    <div className="d-flex d-md-none justify-content-center align-items-center  col-1 col-md-5   order-4">
      <BootstrapDropdown labels="Menu" items={dropdownItems} />
    </div>

    
    <div className=" col-7 col-md-4   d-flex justify-content-center align-items-center order-2 order-md-3">
      <div className="w-75 p-0  d-none d-md-flex  flex-column">
        <p style={{ fontSize: "0.8rem" }} className="m-0 text-center">
        <RingVolumeIcon style={{ fontSize: "0.8rem" }}/>  +974 55555 3456
        </p>
        <p style={{ fontSize: "0.8rem" }} className="m-0 text-center">
        <MailOutlineIcon style={{ fontSize: "0.8rem" }}/>  info@educare.qa
        </p>
      </div>
      <button type="button" className="btn btn-light w-50 me-5">
        Contact Us
      </button>
    </div>

 
  </div>
</div>

  )
}

export default Header
