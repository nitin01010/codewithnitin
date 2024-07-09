import React from 'react'

const JobComponents = () => {
    return (
        <div className=' bg-[#131313] rounded-lg shadow-2xl  flex flex-wrap md:flex-nowrap gap-5 p-2'>
            <div className='p-3 w-[100%] md:w-[30%]'>
                <h1 className=' text-lg font-bold'>Mern Stack internship</h1>
                <div class="grid grid-cols-2 gap-1 mt-3">
                    <p>October 2023</p>
                    <p>April 2024</p>
                </div>
                <p className=' mt-3'>Cyber city gurgaon</p>

            </div>
            <div className='w-[100%] p-3 md:w-[70%]'>
                <h1 className=' text-lg text-purple-400 font-semibold mb-4'>iQuanta</h1>
                <p>Building ui in react.js and integration with rest api making building functionality code review with the team and making everythink seamlessly working also working with git</p>
                <br />
                <ul>
                    <li>1. Building ui with all responsive and latest design according to figma</li>
                    <li>2. Code review with the team</li>
                    <li>3. building upcoming feature</li>
                    <li>4. working with restful API and integration</li>
                    <li>5. maintain 10,0000 lines of code and folder</li>
                </ul>
            </div>
        </div>
    )
}

const Education = () => {
    return (
        <div className=' text-white  p-1 w-[100%] md:w-[68%] mt-16 py-2 m-auto'>
            <div className=' flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-7 rounded  justify-center items-center gap-5'>
                <p className='  text-center text-gray-400 '>Here you can know me a little more and see my <br /> whole experience as a  <b className=' text-white'>Front-End Software Engineer</b> . </p>
                <a href='https://www.canva.com/design/DAGFXedEku8/jJMQXP2lZhGgdhNHovEmMw/view' target='_blanck'>
                    <button className=' py-2 p-2 bg-white text-black  rounded-md  shadow-lg w-[130px] font-semibold'>Download CV</button>
                </a>
            </div>

            <div className=' mt-12'>
                <JobComponents />
            </div>

        </div>
    )
}

export default Education