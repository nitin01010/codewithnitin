"use client";
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';

const Navigation = () => {
    const [statusBar, setStatusBar] = useState(true);
    return (
        <div>
            <div className=' bg-white border border-b-1  flex justify-center md:justify-between  items-center p-4 h-[70px]'>
                <Link href={ '/' }>
                    <h1 className=' text-purple-600 font-semibold text-xl capitalize'>&lt;/&gt; CodeWithNitin</h1>
                </Link>
                {
                    statusBar ? <Menu className=' absolute right-5 sm:hidden cursor-pointer ' onClick={ () => setStatusBar(!statusBar) } /> : <X className=' absolute right-5 sm:hidden cursor-pointer ' onClick={ () => setStatusBar(!statusBar) } />
                }

                <ul className='   hidden md:flex font-semibold gap-10 capitalize  '>
                    <li className=' cursor-pointer  hover:text-purple-600'><Link href={ '/' } />Home</li>
                    <li className=' cursor-pointer  hover:text-purple-600'><Link href={ '' } />Blog</li>
                    <li className=' cursor-pointer  hover:text-purple-600'><Link href={ '' } />Contact</li>
                    <li className=' cursor-pointer  hover:text-purple-600'><Link href={ '' } />My Gear</li>
                </ul>
            </div >
            <div className=' bg-white border hidden sm:flex border-b-1  justify-center  items-center p-3 h-[60px]'>
                <ul className='flex gap-16 font-bold'>
                    <li><Link className=' cursor-pointer text-purple-600' href={ '' }>HTML</Link></li>
                    <li><Link className=' cursor-pointer text-purple-600' href={ '' }>CSS</Link></li>
                    <li><Link className=' cursor-pointer text-purple-600' href={ '' }>JS</Link></li>
                    <li><Link className=' cursor-pointer text-purple-600' href={ '' }>React</Link></li>
                </ul>
            </div>
            {
                statusBar ? null : (
                    <>
                        <div className=' bg-white border p-6  sm:hidden'>
                            <ul className=' flex flex-col gap-7 uppercase  '>
                                <li className=' cursor-pointer  hover:text-purple-600'><Link href={ '/' } />Home</li>
                                <li className=' cursor-pointer  hover:text-purple-600'><Link href={ '' } />Blog</li>
                                <li className=' cursor-pointer  hover:text-purple-600'><Link href={ '' } />Contact</li>
                                <li className=' cursor-pointer  hover:text-purple-600'><Link href={ '' } />My Gear</li>
                            </ul>
                            <br />
                            <ul className=' flex justify-between '>
                                <li><Link className=' cursor-pointer text-purple-600' href={ '' }>HTML</Link></li>
                                <li><Link className=' cursor-pointer text-purple-600' href={ '' }>CSS</Link></li>
                                <li><Link className=' cursor-pointer text-purple-600' href={ '' }>JS</Link></li>
                                <li><Link className=' cursor-pointer text-purple-600' href={ '' }>React</Link></li>
                            </ul>
                        </div>
                    </>
                )

            }
        </div>
    )
}

export default Navigation