import Image from 'next/image'
import React from 'react'
import youtube from "../assets/youtube.png"
import tube from "../assets/tube.jpg"
const Media = () => {
  return (
<div className='container-fluid'>
  <div className="row">
    <div className="col-12 d-flex justify-content-center position-relative ">
      <Image src={youtube} width={1000} height={500} alt="Youtube" />

      <Image
        src={tube}
        width={50}
        height={50}
        alt="Tube"
        className="position-absolute"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  </div>
</div>
  )
}

export default Media
