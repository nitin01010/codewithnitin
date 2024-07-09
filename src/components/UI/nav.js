import { Github, Mail, Linkedin } from 'lucide-react';

const Navigation = () => {
    return (
        <div className=" flex  justify-evenly items-center p-1 text-white w-[95%]  md:w-[622px] h-[70px] bg-[#211F23] rounded-full   m-auto mt-5  ">
            <p className=' cursor-pointer'>
                <a href="/">Home</a>
            </p>
            <p className=' cursor-pointer'>
                <a href='/experience'>
                    experience
                </a>
            </p>
            <p className=' cursor-pointer'>
                <a href='/education'>
                    education
                </a>
            </p>


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
    )
}

export default Navigation