"use client";
import React from 'react'
import { Post } from '../../../lib/dbConnect'
import Card from './Card'
import { Button } from 'antd/es/radio'
import { Flex, Tag } from 'antd';
const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

const Blog = () => {
    return (
        <>
            <div className=" bg-slate-200 rounded-md w-[100%] gap-6 md:w-[70%] m-auto top-3 p-2  flex flex-col justify-center  items-center">

                {
                    Post.map((ItemPost) => {
                        return (
                            <Card data={ ItemPost } />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Blog