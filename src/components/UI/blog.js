"use client";
import React from 'react'
import { Post } from '../../../lib/dbConnect'
import Card from './Card'

const Blog = () => {
    return (
        <>
            <div className=" bg-slate-200 rounded-md w-[100%] gap-6 md:w-[70%] m-auto top-3 p-2  flex flex-col justify-center  items-center">

                {
                    Post.map((ItemPost, index) => {
                        return (
                            <div key={ index }>
                                <Card data={ ItemPost } />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Blog