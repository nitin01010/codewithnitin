"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { Avatar, List, Steps } from 'antd';

const About = () => {
    return (
        <div className=" bg-slate-200 p-2   w-[100%] md:w-[70%] m-auto   mt-2 mb-2  ">
            <Image src="/logoPng.jpg"
                alt='Photo'
                width={ 350 }
                height={ 350 }
                className=' shadow-md rounded-md  m-auto object-cover'
            />
            <div className=' bg-white shadow rounded-md  p-7 md:ml-7 ml-0 mt-3 '>
                <h1 className=' mb-3 text-lg  capitalize font-semibold'>introduction</h1>
                <h1>
                    Hi everyone, I'm Nitin! I'm a passionate MERN Stack developer currently
                    pursuing my BCA degree. I recently completed a 6-month internship where I
                    honed my skills in building interactive web apps using the full MERN stack
                    React Next.js, Node.js, Express.js, MongoDB. I'm also actively learning from
                    the @deltaStuden MERN stack course. Excited to build awesome things!
                </h1>
            </div>

            <div className=' bg-white shadow rounded-md  p-7 md:ml-7 ml-0 mt-3 '>
                <h1 className=' mb-3 text-lg  capitalize font-semibold'>job profile</h1>
                <h1>1 . Mern Stack intern | @iQuanta </h1>
                <h1>Location  gurgaon cyber city</h1>
                <h1>duration  6 Months</h1>
            </div>

        </div >
    )
}

export default About