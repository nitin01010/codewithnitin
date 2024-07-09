import React from 'react'

const EducationComponents = () => {
    return (
        <div className=' bg-[#131313] text-white rounded-lg shadow-2xl  flex flex-wrap md:flex-nowrap gap-5 p-2'>
            <div className='p-3 w-[100%] md:w-[30%]'>
                <h1 className=' text-lg font-bold'>Bachelor of Computer Applications</h1>
                <div class="grid grid-cols-2 gap-1 mt-3">
                    <p>June 2023</p>
                    <p>December 2025</p>
                </div>
                <p className=' mt-3'>New Delhi , India</p>

            </div>
            <div className='w-[100%] p-3 md:w-[70%]'>
                <h1 className=' text-lg text-purple-400 font-semibold mb-4'>Indira Gandhi National Open University ( ODL )</h1>
                <br />
                <p>Graduated from IGNOU with a Bachelor of Computer Applications (BCA) degree, where I gained foundational knowledge in computer science, software development, and information technology, preparing me for a career in software engineering.</p>
                <br />
            </div>
        </div>
    )
}

export default EducationComponents