import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import mapImage from "../assets/qatar-map-.png";
import Image from "next/image";
// import './footer.css';

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>🎓 Educare</h3>
        </div>

        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Curriculum</li>
            <li>Career</li>
            <li>Blogs</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact info</h4>
          <p>educare@gmail.com</p>
          <p>info@educare.com</p>
          <p>+974 4412 3456</p>
          <p>+974 5534 7890</p>
          <div className="social-icons">
            <InstagramIcon />
            <FacebookIcon />
            <LinkedInIcon />
            <YouTubeIcon />
          </div>
        </div>

        <div className="footer-address d-flex">
             <Image src={mapImage} alt="Qatar Map" width={100} height={120} />
        <div>
              <h4>Office Address</h4>
          <p>Educare Education Center</p>
          <p>Building 45, Al Sadd Street, Doha, Qatar</p>
          <a href="#">View on Map</a>
        </div>
         
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 <span>educare</span></p>
        <p>Designed By <strong>Novindus Technologies</strong></p>
        <div className="policy-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
