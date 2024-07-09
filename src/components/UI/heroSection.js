import React from 'react'

const HeroSection = () => {
    return (
        <div className='p-1 transition duration-150 ease-in-out py-1 w-[100%]  mt-8'>
            <h3 className=' text-5xl'>Hi, I’m Nitin</h3>
            <br />
            <p className=' text-gray-400'>During these <b className=' text-white'>1 years</b> as <b className=' text-white'>Front-End Software Engineer</b>. My <br /> role has extended beyond coding to effective <br /> communication with various departments, to define new <br /> features and spearheading the development of new web apps.</p>
            <br />
            <span className='flex gap-10 items-center'>
                <a href='https://www.canva.com/design/DAGFXedEku8/jJMQXP2lZhGgdhNHovEmMw/view' target='_blanck'>
                    <button className='  text-black font-semibold bg-white py-3 p-3  w-[150px] rounded-full'>Downloads CV</button>
                </a>
                <a href="/" className='  md:text-base hover:text-white transition ease-linear delay-75 text-blue-700 text-sm'>See experiences</a>
            </span>
        </div>
    )
}

export default HeroSection