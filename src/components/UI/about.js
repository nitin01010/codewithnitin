"use client";
import Image from 'next/image'

const About = () => {
    return (
        <div className="   w-[100%] md:w-[70%] m-auto   mt-2 mb-2  ">
            <Image src="/logoPng.jpg"
                alt='Photo'
                width={ 350 }
                height={ 350 }
                className=' shadow-md rounded-md  m-auto object-cover'
            />
            <div className=' bg-white border rounded-md p-3 m-2    '>
                <h1 className=' mb-3 text-lg  capitalize font-semibold'>introduction</h1>
                <p className=' text-base font-light ml-3'>
                    Hi everyone, I'm Nitin! I'm a passionate MERN Stack developer currently
                    pursuing my BCA degree. I recently completed a 6-month internship where I
                    honed my skills in building interactive web apps using the full MERN stack
                    React Next.js, Node.js, Express.js, MongoDB. I'm also actively learning from
                    the @deltaStuden MERN stack course. Excited to build awesome things!
                </p>
            </div>

            <div className=' bg-white border  rounded-md m-3 p-3 '>
                <h1 className=' mb-3 text-lg  capitalize font-semibold'>job profile</h1>
                <div className=' ml-5 font-light'>
                    <h1>1 . Mern Stack intern | @iQuanta </h1>
                    <h1>Location  gurgaon cyber city</h1>
                    <h1>duration  6 Months</h1>
                </div>
            </div>
            <p className=' text-center p-2'>Any Help <br /> codewithnitin8855@gmail.com</p>
        </div >
    )
}

export default About