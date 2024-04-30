import { Menu } from 'lucide-react';
import Link from 'next/link';


const Navigation = () => {
    return (
        <div>
            <div className=' bg-white border border-b-1 flex justify-center md:justify-between  items-center p-4 h-[70px]'>
                <h1 className=' text-purple-600 font-semibold text-xl capitalize'>&lt;/&gt; CodeWithNitin</h1>
                <ul className='   hidden md:flex gap-10 capitalize  '>
                    <li className=' cursor-pointer  hover:text-purple-600'><Link href={ '' } />Home</li>
                    <li className=' cursor-pointer  hover:text-purple-600'><Link href={ '' } />Blog</li>
                    <li className=' cursor-pointer  hover:text-purple-600'><Link href={ '' } />Contact</li>
                    <li className=' cursor-pointer  hover:text-purple-600'><Link href={ '' } />My Gear</li>
                </ul>
            </div >
            <div className=' bg-white border hidden sm:flex border-b-1  justify-center  items-center p-3 h-[60px]'>
                <ul className='flex gap-16'>
                    <li><Link className=' cursor-pointer hover:text-purple-600' href={ '' }>HTML</Link></li>
                    <li><Link className=' cursor-pointer hover:text-purple-600' href={ '' }>CSS</Link></li>
                    <li><Link className=' cursor-pointer hover:text-purple-600' href={ '' }>JS</Link></li>
                    <li><Link className=' cursor-pointer hover:text-purple-600' href={ '' }>React</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation