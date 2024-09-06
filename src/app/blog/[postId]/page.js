'use client';
import BlogDetails from '@/components/UI/blogDetails'
import { useParams } from 'next/navigation';

const page = () => {
    const { postId } = useParams();
    return (
        <BlogDetails postId={ postId } />
    )
}

export default page