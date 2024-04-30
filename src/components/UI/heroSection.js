import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <div className=' w-[100%] p-3 sm:p-10 mt-0 overflow-hidden  md:-mt-5 flex  gap-3 flex-wrap  sm:flex-nowrap'>
            <div className='flex justify-start flex-col font-medium     rounded   w-[100%] p-2  sm:p-9'>
                <h1 className=' text-xl sm:text-3xl '>
                    Welcome to <span className=' font-semibold text-purple-600'> CodeWithNitin </span>
                </h1>
                <h1 className=' text-lg'>Learn Web |</h1>
                <p className=' text-start mt-7 '>
                    Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Nitin is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.
                </p>
                <div className='  flex gap-4 mt-6'>
                    <Link href={ '/blog' }>
                        <button
                            type="button"
                            class=" bg-blue-600 p-3 rounded mt-4 text-white shadow-lg w-[150px]">
                            Free Courses
                        </button>
                    </Link>
                    <Link href={ '/blog' }>
                        <button
                            type="button"
                            class=" bg-slate-100 p-3 rounded mt-4 text-black shadow hover:bg-slate-300 w-[180px]">
                            Explore Blog
                        </button>
                    </Link>
                </div>
            </div>
            <Image src={ '/heroSection.jpg' } className='  object-none  sm:w-2/4    rounded-xl' width={ 400 } height={ 200 } />
        </div>
    )
}

export default HeroSection