"use client";
import React, { useEffect, useState } from 'react';
import logo from '../../../public/logomy.jpg';

const About = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {  // Adjust this threshold as needed
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='rounded-t-lg p-3 w-[95%] lg:w-[75%] m-auto relative overflow-hidden'>
            <h1 className={ `text-4xl top-10 md:text-5xl lg:text-7xl xl:text-8xl text-white mt-10 rotate-90 absolute left-0 md:-left-30 md:top-32 transform -translate-y-1/2 font-bold ${isScrolled ? 'scroll-animation-about' : ''}` }>
                <b>About</b>
            </h1>
            <h1 className={ `text-5xl md:text-4xl lg:text-7xl xl:text-9xl text-white absolute right-0 top-32 transform -translate-y-1/2 font-bold ${isScrolled ? 'scroll-animation-me' : ''}` }>
                <b>Me</b>
            </h1>
            <img src={ logo.src } className='object-cover rounded-3xl md:w-[450px] w-[200px] h-[200px] md:h-[350px] m-auto' alt="Logo" />
            <br />
            <div className="max-w-4xl mx-auto shadow-md rounded-lg mt-10 text-white">
                <header className="text-center mb-6">
                    <h1 className="text-3xl font-bold">About Nitin</h1>
                </header>
                <section>
                    <p className="mb-4">
                        Hi, I’m Nitin. Over the past year as a Front-End Software Engineer, my role has extended beyond coding to include effective communication with various departments to define new features and spearheading the development of new web apps.
                    </p>
                    <h2 className="text-2xl font-semibold mb-2">Professional Experience</h2>
                    <br />
                    <h3 className="text-xl font-semibold mb-1">Front-End Developer</h3>
                    <p className="text-gray-400 mb-2">June 2024 - Present<br />Noida Sector 142, Minecart</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Designed and implemented responsive UI components based on Figma designs, ensuring compatibility across various devices and screen sizes.</li>
                        <li>Conducted thorough code reviews with the team to identify and resolve issues, enhance performance, and adhere to best practices.</li>
                        <li>Developed and integrated upcoming features into the existing application, contributing to the overall enhancement of user experience.</li>
                        <li>Integrated and managed RESTful APIs to ensure seamless data exchange between the frontend and backend systems.</li>
                        <li>Maintained and organized a codebase consisting of over 100,000 lines of code, ensuring proper folder structure and documentation for ease of maintenance and scalability.</li>
                    </ul>
                    <br />
                    <h3 className="text-xl font-semibold mb-1">MERN Stack Intern</h3>
                    <p className="text-gray-400 mb-2">October 2023 - April 2024<br />Cyber City, Gurgaon, iQuanta</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Built UI in React.js and integrated it with REST APIs, ensuring seamless functionality.</li>
                        <li>Conducted code reviews with the team to maintain high standards and smooth operations.</li>
                        <li>Developed upcoming features and integrated them into the application.</li>
                        <li>Managed a codebase of 10,000 lines of code, ensuring efficient organization and documentation.</li>
                    </ul>
                    <br />
                    <h2 className="text-2xl font-semibold mb-2">Education</h2>
                    <br />
                    <h3 className="text-xl font-semibold mb-1">Bachelor of Computer Applications</h3>
                    <p className="text-gray-400 mb-2">June 2023 - December 2025<br />New Delhi, India, Indira Gandhi National Open University (IGNOU)</p>
                    <p>Graduated with a Bachelor of Computer Applications (BCA) degree, gaining foundational knowledge in computer science, software development, and information technology, which prepared me for a career in software engineering.</p>
                </section>
            </div>
        </div>
    );
}

export default About;
