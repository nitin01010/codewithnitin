"use client";
import React from 'react'
import { Post } from '../../../lib/dbConnect'
import Card from './Card'

const Blog = () => {
    return (
        <>
            <div className="  rounded-md w-[100%] gap-6 md:w-[70%] m-auto top-3 p-2  flex flex-col justify-center  items-center">

                <h1 className=" font-semibold text-2xl">Recommended Courses</h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        Post.map((ItemPost) => {
                            return (
                                <div key={ ItemPost.id }>
                                    <Card data={ ItemPost } />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Blog