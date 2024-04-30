"use client";
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navigation = () => {
    const router = useRouter()
    const [statusBar, setStatusBar] = useState(true);
    const PathList = [
        {
            id: 1,
            path: '/',
            pathName: 'Home'
        },
        {
            id: 2,
            path: '/blog',
            pathName: 'Blog'
        },
        {
            id: 3,
            path: '/Contact',
            pathName: 'Contact'
        },
        {
            id: 4,
            path: '/myGear',
            pathName: 'My Gear'
        },
    ]
    const Subject = [
        {
            id: 1,
            subject: 'HTML'
        },
        {
            id: 2,
            subject: 'Css'
        },
        {
            id: 3,
            subject: 'JS'
        },
        {
            id: 4,
            subject: 'React.js'
        },
    ]
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
                    {
                        PathList?.map((itemPath) => {
                            return <li key={ itemPath.id } className=' cursor-pointer text-black  hover:text-purple-600' onClick={ () => router.push(itemPath.path) }>{ itemPath.pathName }</li>
                        })
                    }
                </ul>

            </div >
            <div className=' bg-white border hidden sm:flex border-b-1  justify-center  items-center p-3 h-[60px]'>
                <ul className='flex gap-16 font-bold'>
                    {
                        Subject?.map((item) => {
                            return <li key={ item.id } className=' cursor-pointer text-purple-600'>{ item.subject }</li>
                        })
                    }
                </ul>
            </div>
            {
                statusBar ? null : (
                    <>
                        <div className=' bg-white border p-6  sm:hidden'>
                            <ul className=' flex flex-col gap-7 uppercase  '>
                                {
                                    PathList?.map((itemPath) => {
                                        return <li key={ itemPath.id } className=' cursor-pointer text-black  hover:text-purple-600' onClick={ () => router.push(itemPath.path) }>{ itemPath.pathName }</li>
                                    })
                                }
                            </ul>
                            <br />
                            <ul className=' flex justify-between '>
                                {
                                    Subject?.map((item) => {
                                        return <li key={ item.id } className=' cursor-pointer text-purple-600'>{ item.subject }</li>
                                    })
                                }
                            </ul>
                        </div>
                    </>
                )

            }
        </div>
    )
}

export default Navigation