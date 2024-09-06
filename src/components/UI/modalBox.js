"use client";

import React, { useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { LuMessageSquareDashed } from "react-icons/lu";
import { IoIosContact } from "react-icons/io";
import { BsCardList } from "react-icons/bs";
import { useRouter } from 'next/navigation';

const ModalBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleClick = (path) => {
        router.push(path);
        setIsOpen(false); // Close the modal after navigating
    };

    return (
        <div>
            <div
                onClick={ () => setIsOpen(!isOpen) }
                className="bg-orange-500  rounded-3xl absolute md:hidden w-[50px] h-[50px] right-4 top-[500px] p-3 flex items-center justify-center cursor-pointer"
            >
                { isOpen ? (
                    <button
                        onClick={ () => setIsOpen(false) }
                        className="text-white text-xl"
                    >
                        &times;
                    </button>
                ) : (
                    <span className="text-white text-xl">+</span>
                ) }
            </div>
            { isOpen && (
                <div className="fixed inset-0  md:hidden bg-black bg-opacity-75 flex flex-col items-center justify-center">
                    <div className="absolute top-4 right-4">
                        <button
                            onClick={ () => setIsOpen(false) }
                            className="text-white text-3xl"
                        >
                            &times;
                        </button>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className='relative group'>
                            <IoHomeOutline size={ 30 } onClick={ () => handleClick('/') } color='white' className='cursor-pointer' />
                            <span className='absolute left-1/2 bottom-full mb-2 hidden w-max -translate-x-1/2 text-center text-white bg-black p-2 rounded group-hover:block'>
                                Home
                            </span>
                        </div>
                        <div className='relative group'>
                            <BsCardList size={ 30 } onClick={ () => handleClick('/blog') } color='white' className='cursor-pointer' />
                            <span className='absolute left-1/2 bottom-full mb-2 hidden w-max -translate-x-1/2 text-center text-white bg-black p-2 rounded group-hover:block'>
                                Blog
                            </span>
                        </div>
                        <div className='relative group'>
                            <IoIosContact size={ 30 } onClick={ () => handleClick('/about') } color='white' className='cursor-pointer' />
                            <span className='absolute left-1/2 bottom-full mb-2 hidden w-max -translate-x-1/2 text-center text-white bg-black p-2 rounded group-hover:block'>
                                About me
                            </span>
                        </div>
                        <div className='relative group'>
                            <LuMessageSquareDashed size={ 30 } onClick={ () => handleClick('/contact') } color='white' className='cursor-pointer' />
                            <span className='absolute left-1/2 bottom-full mb-2 hidden w-max -translate-x-1/2 text-center text-white bg-black p-2 rounded group-hover:block'>
                                Messages
                            </span>
                        </div>
                    </div>
                </div>
            ) }
        </div>
    );
};

export default ModalBox;
