import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className=" mb-11 py-4 p-4 flex justify-between flex-wrap  md:flex-nowrap gap-7   shadow-sm  mt-[3%]  w-[95%] lg:w-[70%] m-auto text-white bg-[#1E1E1E] rounded-full">
                <p>Follow me</p>
                <div className=' flex gap-10'>
                    <p className=' cursor-pointer'><a href="https://github.com/nitin01010" target='_blanck' ><Github size={ 18 } /></a></p>
                    <p className=' cursor-pointer'>
                        <a href="https://www.linkedin.com/in/nitin0202/" target='_blanck'>
                            <Linkedin size={ 18 } />
                        </a>
                    </p>
                    <p className='cursor-pointer'>
                        <a href="mailto:nitinsachdeva0202@gmail.com" target='_blank'>
                            <Mail size={ 18 } />
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer