import React from 'react'
import { Bookmark } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { Post } from '../../../lib/dbConnect';
const BlogId = ({ id }) => {
    const result = Post.filter((item) => {
        return item.id == id
    });
    return (
        <div className=" bg-slate-200 p-2 rounded   w-[100%] md:w-[70%] m-auto   mt-2 mb-2  ">
            <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                className='   m-auto  rounded-md'
                alt="ui/ux review check" />
            <div className="p-2 bg-white mt-3 flex gap-3 justify-end items-center rounded-md">
                <ThumbsUp className=' cursor-pointer' />
                <Bookmark className=' cursor-pointer' />
            </div>

            <div className="p-2 bg-white mt-3 rounded-md">
                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    { result[0].title }
                </h4>
                <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                    { result[0].content }
                </p>
                <h1>{ result[0].date }</h1>
            </div>

        </div>
    )
}

export default BlogId