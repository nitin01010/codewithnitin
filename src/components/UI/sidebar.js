"use client";
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { LuMessageSquareDashed } from "react-icons/lu";
import { IoIosContact } from "react-icons/io";
import { BsCardList } from "react-icons/bs";
import { useRouter } from 'next/navigation';
import ModalBox from './modalBox';


const Sidebar = ({ children }) => {
    const router = useRouter();
    return (
        <div className=' flex  gap-1 '>
            <div className=' border-indigo-500  text-white border-r-2 hidden md:block  w-auto  md:w-[10%] xl:w-[5%] w- p-4'>
                <div className='flex flex-col gap-8'>
                    <div className='relative group'>
                        <IoHomeOutline size={ 30 } onClick={ () => router.push('/') } color='white' className='rounded-3xl w-[50px] h-[35px]' />
                        <span className='absolute left-1/2 bottom-full mb-2 hidden w-max -translate-x-1/2 text-center text-white bg-black p-2 rounded group-hover:block'>
                            Home
                        </span>
                    </div>
                    <div className='relative group'>
                        <BsCardList size={ 30 } onClick={ () => router.push('/blog') } color='white' className='rounded-3xl w-[50px] h-[35px]' />
                        <span className='absolute left-1/2 bottom-full mb-2 hidden w-max -translate-x-1/2 text-center text-white bg-black p-2 rounded group-hover:block'>
                            Blog
                        </span>
                    </div>
                    <div className='relative group'>
                        <IoIosContact size={ 30 } onClick={ () => router.push('/about') } color='white' className='rounded-3xl w-[50px] h-[35px]' />
                        <span className='absolute left-1/2 bottom-full mb-2 hidden w-max -translate-x-1/2 text-center text-white bg-black p-2 rounded group-hover:block'>
                            About me
                        </span>
                    </div>
                    <div className='relative group'>
                        <LuMessageSquareDashed onClick={ () => router.push('/contact') } size={ 30 } color='white' className='rounded-3xl w-[50px] h-[35px]' />
                        <span className='absolute left-1/2 bottom-full mb-2 hidden w-max -translate-x-1/2 text-center text-white bg-black p-2 rounded group-hover:block'>
                            Messages
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-[100%]  md:w-[95%] ">
                { children }
            </div>
        </div>
    )
}

export default Sidebar