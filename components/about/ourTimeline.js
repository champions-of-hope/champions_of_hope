import React from 'react'
import Image from "next/image";

const OurTimeline = () => {
  return (
    <div>
        <h3 className='text-4xl font-bold text-center mb-12'>Our Timeline</h3>
        <Image className="lg:px-[100px]" src={"/assets/aboutPage/coh_dark_infographic.png"} width={1490} height={100}/>
    </div>
  )
}

export default OurTimeline