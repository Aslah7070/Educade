import React from 'react'
import maths from "../assets/maths.png"
import cs from "../assets/cs.png"
import eng from "../assets/eng.png"
import chme from "../assets/chme.png"
import bio from "../assets/bio.png"
import phy from "../assets/phy.png"
import glob from "../assets/glob.png"
import Image from 'next/image'
import CallMadeIcon from '@mui/icons-material/CallMade';

const Subjects = () => {
     const subjects = [
  { name: "Maths", img: maths },
  { name: "Science", img: cs },
  { name: "English", img: eng },
  { name: "Chemistry", img: chme },
  { name: "Biology", img: bio },
  { name: "physics", img: phy }
];
  return (
   <div className='container-fluid h-50  mt-5  '>
            <div className='row '>
                <div className='col-4 d-flex justify-content-between'>
                    <div className=''>

                    </div>
                </div>
                <div className='col-5'>
                       <h1 style={{color: 'rgba(101, 89, 69, 1)' }}>
  Subjects We  <span style={{ fontWeight: 'bold'}}>Teach</span>
</h1>
                </div>
                <div className='col-3'>
                       <button type="button" className=" me-md-5 bg-maroon">
            View All <CallMadeIcon/>
          </button>
                </div>

            </div>
            <div className='row mt-4'>
        <div className='col-12 d-flex flex-wrap justify-content-center gap-4'>
          {subjects.map((subject, index) => (
            <div key={index} className="card" style={{ width: '12rem',height:"10rem" }}>
                      <div
                style={{
                  width: "200px",
                  height: "100px",
                //   borderRadius: "50%",   
                  overflow: "hidden",
                  marginBottom: "10px",
                
                }}
              >
                <Image
                  src={subject.img}
                  alt={subject.name}
                  width={190}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title ">{subject.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className='row'>
        <div className='col-12'>

  <div
  className='d-flex justify-content-center b'
              
              >
                <Image
                  src={glob}
                  alt={"glob"}
                  width={900}
                  height={600}
                //   style={{ objectFit: "cover" }}
                />
              </div>
        </div>

      </div>
        </div>
  )
}

export default Subjects
