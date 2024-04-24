import BlogId from '@/components/UI/blogId'
import React from 'react'

const page = ({ params }) => {
    const { blogId } = params;
    return (
        <BlogId id={ blogId } />
    )
}

export default page