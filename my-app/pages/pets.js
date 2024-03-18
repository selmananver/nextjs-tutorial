import React from 'react'
import Image from 'next/image'
import img from '../public/1.jpg'

function Pets() {
  return (
    <div>
      {
        ['1','2','3','4','5'].map((path)=>{
            return (
            <><div key={path} /><Image src={img} placeholder='blur' blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAC1JREFUGBlj/P//PwMAFgEk/j3AgFEMBqwAhLYEAAFzB/8T0hhx4AAAAAElFTkSuQmCC"
            alt='pet' width='280' height='200' /></>
            )
        })}
    </div>
  )
}

export default Pets
