import BlogCard from './blogCard'
import axios from 'axios'

const Blog = async () => {
    const res = await axios.get(`${process.env.BASE_URL}/api/blog`);
    const { allPost: posts } = res.data;
    return (
        <div className='w-[95%] lg:w-[75%] m-auto rounded bg-transparent'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-2 bg-transparent'>
                { posts.map((item) => (
                    <BlogCard key={ item.id } data={ item } /> // Add a unique key prop here
                )) }
            </div>
        </div>
    )
}
export default Blog
