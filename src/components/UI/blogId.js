import React from 'react'
import { Bookmark } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { Post } from '../../../lib/dbConnect';
import Image from 'next/image';
const BlogId = ({ id }) => {
    const result = Post.filter((item) => {
        return item.id == id
    });
    return (
        <div className=" p-2 rounded   w-[100%] md:w-[70%] m-auto   mt-2 mb-2  ">
            <Image src={ '/thum.jpg' } width={ 200 } height={ 200 } className=' w-[100%] object-cover   m-auto  rounded-md' alt="ui/ux review check" />
            <div className="p-2 bg-white mt-3 flex gap-3 justify-end items-center rounded-md">
                <ThumbsUp className=' cursor-pointer' />
                <Bookmark className=' cursor-pointer' />
            </div>

            <div className="p-2 bg-white mt-3 rounded-md">
                <h4 className="block font-sans text-xl md:text-2xl  antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    { result[0].title }
                </h4>
                <div className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                    { result[0].content }
                </div>

                <h1 className=' mt-20 '>{ result[0].date }</h1>
            </div>

        </div>
    )
}

export default BlogId