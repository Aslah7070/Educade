"use client";
import Image from "next/image";
import bg from "../assets/bg1.png";
import logo from "../assets/logo.png";
import left from "../assets/leftArticle.svg"

export const Article = () => {
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
        <div className="row h-50">
           <div className="col-12    h-75 d-flex justify-content-center align-items-center">
      <p className="fs-1 text-center text-maroon"><span style={{ fontWeight: 900  }} className=" fs-1">Personalized One-to-One</span><br />  Tutoring at Our Center</p>
           </div>
        </div>
         <div className="row">
           <div className="col-md-4">
         adfdf
           </div>
            <div className="col-md-4">
         adfdf
           </div>
            <div className="col-md-4">
         adfdf
           </div>
        </div>


 <Image className="" src={left} width={300} height={300} alt="" />
    </div>
  );
};
